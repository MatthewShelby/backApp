const https = require('https');
const request = require('request');
//var consts = require('./const')
var functions = require('./funcs')
module.exports = {


      async getPriceFor(chain, tokenSymbol) {
            var baseURL = functions.getChainURL(chain)
            console.log('baseURL: ' + baseURL)
            var address = functions.getTokenAddress(chain, tokenSymbol)
            //{ headers: { '0x-api-key': '53b78ece-1c94-4c5a-b90b-3feacfe9e6b6' } }
            request(baseURL + 'swap/v1/quote?buyToken=BUSD&sellToken=' + address + '&sellAmount=100000000000000000', (error, response, body) => {
                  if (error) {
                        console.error(`Could not send request to API: ${error.message}`);
                        return;
                  }

                  if (response.statusCode != 200) {
                        console.error(`Expected status code 200 but received ${response.statusCode}.`);
                        return;
                  }

                  console.log('Processing our list of movies');
                  movies = JSON.parse(body);
                  console.log(movies.price)
                  return movies.price
                  // movies.forEach(movie => {
                  //       console.log(`${movie['title']}, ${movie['release_date']}`);
                  // });
            });
      },
      getPriceForOld(chain, tokenSymbol) {
            var baseURL = functions.getChainURL(chain)
            console.log('baseURL: ' + baseURL)
            var address = functions.getTokenAddress(chain, tokenSymbol)
            return baseURL + ' - ' + address
            https.get(baseURL + 'swap/v1/quote?buyToken=BUSD&sellToken=' + address + '&sellAmount=100000000000000000', (resp) => {
                  let data = '';

                  // A chunk of data has been received.
                  resp.on('data', (chunk) => {
                        data += chunk;
                  });

                  // The whole response has been received. Print out the result.
                  resp.on('end', () => {
                        console.log('JSON.parse(data).explanation');
                        console.log((data.price));
                        // return res.status(200).json({
                        //       status: "success", data: JSON.parse(data)
                        // });
                        return data.price //'ggo'
                  });

            }).on("error", (err) => {
                  console.log("Error: " + err.message);
            })
      }



      // getToeknAddress: function (chainSym, tokenSymbol) {
      //       switch (chainSym) {
      //             case 'BSC': case 56:
      //                   try { return consts.BSCTokens.find(t => t.symbol == tokenSymbol).address } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
      //             case 'ETH': case 1:
      //                   try { return consts.ETHTokens.find(t => t.symbol == tokenSymbol).address } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
      //             case 'POL': case 137:
      //                   try { return consts.POLTokens.find(t => t.symbol == tokenSymbol).address } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
      //             case 'AVA': case 43114:
      //                   try { return consts.AVATokens.find(t => t.symbol == tokenSymbol).address } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
      //             default:
      //                   console.log('Could not find the Chain...'); return '0x00'
      //       }
      // }
}
