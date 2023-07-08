const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require('cors');
const https = require('https');
var f = require('./funcs')
var r = require('./reqs')
require("dotenv").config();

// Transaction (records) Schema in DB
const Rec = require("./TX")
var acceptedUrl = process.env.aurl

//app.use(cors()); 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", acceptedUrl);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = process.env.PORT || 3001;


const affAdd = '0xc8F01FA38D6A53f6D4184e63d15C0c8a322FFa02'






// #region ===================== SWAP FUNCTIONS =====================

// ========== Fetch Price for a pair
app.get("/pairPrice/:chain/:payToken/:receiveToken/:value/:slippage", async (req, res) => {
  console.log('pairPriceFor ### start')
  var SellTokenAddress = f.getTokenAddress(req.params.chain, req.params.payToken)
  var BuyToeknAddress = f.getTokenAddress(req.params.chain, req.params.receiveToken)
  var value = req.params.value// * (10 ** 18);
  //var value = Number(req.params.value)// * (10 ** 18);
  console.log('value: ' + toFixed(value))
  var slp = req.params.slippage || 0.02
  var url = 'https://bsc.api.0x.org/swap/v1/quote?buyToken=' + BuyToeknAddress + '&sellToken=' + SellTokenAddress + '&sellAmount=' + value + '&slippagePercentage=' + slp
  //+ '&feeRecipient=' + affAdd + '&buyTokenPercentageFee=0.01'
  console.log(url)
  const headers = { '0x-api-key': '53b78ece-1c94-4c5a-b90b-3feacfe9e6b6' };
  https.get(url, { headers }, (resp) => {
    let data = '';
    resp.on('data', (chunk) => { data += chunk })
    resp.on('end', () => {
      if (JSON.parse(data).code == 100) {
        return res.status(500).json({
          status: "error", data: (JSON.parse(data))
        })
      } else {
        return res.status(200).json({
          status: "success", data: (JSON.parse(data))
        })
      }
    });
  }).on("error", (err) => {
    console.log(err)
    return res.status(501).json({
      status: "error", data: err.message
    });
  })
})

function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += (new Array(e + 1)).join('0');
    }
  }
  return x;
}

// ========== Check Availability
app.get("/health", async (req, res) => {
  return res.status(200).json({
    status: "success"
  });
})

//#endregion



//#region ===================== DATABASE FUNCTIONS

// NOTE:
// On Database calls:
// Errors with code 501 happend on this server, while errors with code 500 
// happend outside of this server.




// ===> Get a Record by Id
app.get("/getRecord/:id", async (req, res) => {
  try {
    console.log(req.params.id)
    Rec.findById(req.params.id).then((ress) => {
      return res.status(200).json({
        status: "success", data: ress
      });
    }).catch((error) => {
      return res.status(500).json({
        status: 'error', data: error.message
      });
    })

  } catch (error) {
    return res.status(501).json({
      status: 'error', data: error
    });
  }
})



// ===> Delete Record by Id
app.get("/delRecord/:id", async (req, res) => {
  try {
    console.log('to delete: ' + req.params.id)
    Rec.findByIdAndDelete(req.params.id).then((ress) => {
      return res.status(200).json({
        status: "success", data: ress
      });
    }).catch((error) => {
      return res.status(500).json({
        status: 'error', data: error.message
      });
    })

  } catch (error) {
    return res.status(501).json({
      status: 'error', data: error
    });
  }
})

// ===> Add New REcord
app.post("/record/:title/:cat", express.json({ type: '*/*' }), async (req, res) => {
  try {
    console.log('req.body:')
    console.info(req.body)
    Rec.create({
      title: req.params.title,
      category: req.params.cat,
      details: req.body
    }).then((result) => {
      // console.log('add success')
      // console.log(result)
      return res.status(200).json({
        status: 'success', id: result._id
      });
    }).catch((error) => {
      console.log('add error')
      console.log(error)
      return res.status(500).json({
        status: 'error', data: error.message
      });
    })


  } catch (error) {
    return res.status(501).json({
      status: 'error', data: error
    });
  }

})


// ===> Returns Records by category
app.get("/recordList/:cat", async (req, res) => {
  try {
    var cat = req.params.cat;
    Rec.find().then((recRes) => {
      var results = new Array();
      var n = 0;
      console.log('cat: ' + cat + '   -lenght: ' + recRes.length)
      if (cat == 'all') {
        for (let i = 0; i < recRes.length; i++) {
          results[n] = { title: recRes[i].title, id: recRes[i]._id }
          n++;
        }
        console.log('results: ' + results)
        return res.status(200).json({
          status: 'success', data: results
        });

      } else {
        for (let i = 0; i < recRes.length; i++) {
          if (recRes[i].category == cat) {
            results[n] = { title: recRes[i].title, id: recRes[i]._id }
            n++
          }
        }

        return res.status(200).json({
          status: 'success', data: results
        });
      }
    }).catch((error) => {
      return res.status(500).json({
        status: 'error', data: error.message
      });
    })
  } catch (error) {
    return res.status(501).json({
      status: 'error', data: error
    });
  }
})



// ===> Returns all records newes first
app.get("/allrecord", async (req, res) => {
  try {
    Rec.find().sort({ recordTime: -1 }).then((recRes) => {

      return res.status(200).json({
        status: 'success', data: recRes
      });


    }).catch((error) => {
      return res.status(500).json({
        status: 'error', data: error.message
      });
    })
  } catch (error) {
    return res.status(501).json({
      status: 'error', data: error
    });
  }
})

//#endregion






// .env will be load on server 
//var dburi = process.env.dburi



// For server
var dburi = process.env.dburi


mongoose.connect(dburi, {});
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


