var consts = require('./const')

module.exports = {
      getTokenAddress: function (chainSym, tokenSymbol) {
            chainSym = chainSym.toUpperCase()
            tokenSymbol = tokenSymbol.toUpperCase()
            switch (chainSym) {
                  case 'BSC': case 56:
                        try { return consts.BSCTokens.find(t => t.symbol == tokenSymbol).address } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
                  case 'ETH': case 1:
                        try { return consts.ETHTokens.find(t => t.symbol == tokenSymbol).address } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
                  case 'POL': case 137:
                        try { return consts.POLTokens.find(t => t.symbol == tokenSymbol).address } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
                  case 'AVA': case 43114:
                        try { return consts.AVATokens.find(t => t.symbol == tokenSymbol).address } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
                  default:
                        console.log('Could not find the Chain...'); return '0x00'
            }
      }

      , getChainURL: function (chainSym) {
            console.log('Start of getChainURL')
            switch (chainSym) {
                  case 'BSC': case 56:
                        try { console.log('From URL chainSym is: ' + chainSym + '    AND in next line is the base URL'); console.log(consts.allChains.find(c => c.symbol == chainSym).URL); return consts.allChains.find(c => c.symbol == chainSym).URL } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
                  case 'ETH': case 1:
                        try { return consts.ETHTokens.find(t => t.symbol == tokenSymbol).URL } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
                  case 'POL': case 137:
                        try { return consts.POLTokens.find(t => t.symbol == tokenSymbol).URL } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
                  case 'AVA': case 43114:
                        try { return consts.AVATokens.find(t => t.symbol == tokenSymbol).URL } catch (error) { console.log('Address is not exist on the Chain...'); return '0x00' }
                  default:
                        console.log('Could not find the Chain...'); return '0x00'
            }
      }
}



// export function getToeknAddress(chainSym, tokenSymbol) {
//       switch (chainSym) {
//             case 'BSC': case 56:
//                   return consts.BSCTokens.find(t => t.symbol == tokenSymbol).address
//             case 'ETH': case 1:
//                   return consts.ETHTokens.find(t => t.symbol == tokenSymbol).address
//             case 'POL': case 137:
//                   return consts.POLTokens.find(t => t.symbol == tokenSymbol).address
//             case 'AVA': case 43114:
//                   return consts.AVATokens.find(t => t.symbol == tokenSymbol).address
//             default:
//                   return '0x00'
//       }
// }



// module.exports = { getToeknAddress: getToeknAddress }