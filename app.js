const express = require("express");
const app = express();
//const fetch = require("node-fetch-native"); // Import the fetch library for making HTTP requests

const port = process.env.PORT || 3001;


const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/c', async (req, res) => {
  try {
    const apiResponse = await fetch('https://api.1inch.io/v5.0/56/approve/allowance?tokenAddress=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&walletAddress=0x11677b07C9AcA203A9131571a164C3F0d3f31908')
    //const apiResponseJson = await apiResponse.json()

    console.log(apiResponse);

    return res.status(200).json({
      status: "success", data: apiResponse
    });

    // console.log(apiResponseJson)
    // res.send('Running 🏃')
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
})

app.get('/cc', async (req, res) => {
  try {
    var tokenAddress = req.tokenAddress// "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
    var walletAddress = req.walletAddress//'0x11677b07C9AcA203A9131571a164C3F0d3f31908'
    var cid = req.cid
    const apiResponse = await fetch('https://api.1inch.io/v5.0/' + cid + '/approve/allowance?tokenAddress=' + tokenAddress + '&walletAddress=' + walletAddress)
    //const apiResponseJson = await apiResponse.json()
    console.log(apiResponse);

    return res.status(200).json({
      status: "success", data: apiResponse
    });
    // console.log(apiResponseJson)
    // res.send('Running 🏃')
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
})



var fs = require('fs');
//app.get("/", (req, res) => res.type('html').send(html));
app.get('/', function (request, response) {
  //response.sendFile('C:/VSCode Repos/DEX/Moralisish/dexstarter/backapp/backapp/htmls/index.html');
  response.status(200).json({ status: 'success' })
});

app.get('/al', async (req, res) => {
  var xx = await fetch('https://api.1inch.io/v5.0/' + req.query)
  return res.status(200).json({
    status: "success", data: xx
  });
})
app.get('/als', async (req, res) => {
  var xx = await fetch('https://api.1inch.io/v5.0/56/approve/allowance?tokenAddress=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&walletAddress=0x11677b07C9AcA203A9131571a164C3F0d3f31908')
  return res.status(200).json({
    status: "success", data: xx
  });
})

app.get('/al2', async (req, res) => {
  try {
    await fetch('https://api.1inch.io/v5.0/' + req.query).then((resx) => {
      console.log('als2: ------>')
      console.log(resx)
      return res.status(200).json({
        status: "success", data: resx
      });
    }).catch((error) => {
      console.log('als2: error ------>')
      console.log(error)
      return res.status(200).json({
        status: "error", data: error
      });
    })

  } catch (error) {
    console.log('als2: error2 ------>')
    console.log(error)
    return res.status(200).json({
      status: "error2", data: error
    });
  }
})


app.get('/als2', async (req, res) => {
  try {
    await fetch('https://api.1inch.io/v5.0/56/approve/allowance?tokenAddress=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&walletAddress=0x11677b07C9AcA203A9131571a164C3F0d3f31908').then((resx) => {
      console.log('als2: ------>')
      console.log(resx)
      return res.status(200).json({
        status: "success", data: resx
      });
    }).catch((error) => {
      console.log('als2: error ------>')
      console.log(error)
      return res.status(501).json({
        status: "error", data: error
      });
    })

  } catch (error) {
    console.log('als2: error2 ------>')
    console.log(error)
    return res.status(501).json({
      status: "error2", data: error
    });
  }
})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


