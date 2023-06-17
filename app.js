const express = require("express");
const app = express();
const fetch = require("node-fetch-native"); // Import the fetch library for making HTTP requests

const port = process.env.PORT || 3001;
var fs = require('fs');
//app.get("/", (req, res) => res.type('html').send(html));
app.get('/', function (request, response) {
  //response.sendFile('C:/VSCode Repos/DEX/Moralisish/dexstarter/backapp/backapp/htmls/index.html');
  response.status(200).json({ status: 'success' })
});

app.get('/al', async (req, res) => {
  return fetch('https://api.1inch.io/v5.0/' + req.query)
})
app.get('/als', async (req, res) => {
  return fetch('https://api.1inch.io/v5.0/56/approve/allowance?tokenAddress=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&walletAddress=0x11677b07C9AcA203A9131571a164C3F0d3f31908')
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

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


