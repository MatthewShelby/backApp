const express = require("express");
const app = express();
const cors = require('cors');
const https = require('https');
var f = require('./funcs')
var r = require('./reqs')
//app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = process.env.PORT || 3001;




app.get("/priceFor/:chain/:payToken/:receiveToken", async (req, res) => {
  var SellTokenAddress = f.getTokenAddress(req.params.chain, req.params.payToken)
  var BuyToeknAddress = f.getTokenAddress(req.params.chain, req.params.receiveToken)
  var url = 'https://bsc.api.0x.org/swap/v1/quote?buyToken=' + BuyToeknAddress + '&sellToken=' + SellTokenAddress + '&sellAmount=20000000000000000'
  console.log(url)
  https.get(url, (resp) => {
    let data = '';
    resp.on('data', (chunk) => { data += chunk })
    resp.on('end', () => {
      return res.status(200).json({
        status: "success", data: (JSON.parse(data))
      });
    });
  }).on("error", (err) => {
    return res.status(501).json({
      status: "error", data: err.message
    });
  })
})








const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


