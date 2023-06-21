//#region               DATA CLASSES
class Chain {
      constructor(_id, name, symbol, nativeTokenSymbol, cid, hexId, proxy, URL) {
            this._id = _id;
            this.name = name;
            this.symbol = symbol;
            this.nativeTokenSymbol = nativeTokenSymbol;
            this.cid = cid;
            this.hexId = hexId;
            this.proxy = proxy;
            this.URL = URL;
      }
}

class Token {
      constructor(_id, name, symbol, address, cid, usdPrice, allowance, balance, hexBalance) {
            this._id = _id;
            this.name = name;
            this.symbol = symbol;
            this.address = address;
            this.cid = cid;
            this.usdPrice = usdPrice;
            this.allowance = allowance;
            this.balance = balance;
            this.hexBalance = hexBalance;
      }
}
//#endregion

//#region               const CHAIN DATA
const allChains = [
      BSC = new Chain('c0', 'Binance Smart Chain', 'BSC', 'BNB', 56, '0x38', '0xdef1c0ded9bec7f1a1670819833240f027b25eff', 'https://bsc.api.0x.org/'),
      ETH = new Chain('c1', 'Ethereum', 'ETH', 'ETH', 1, '0x1', '0xdef1c0ded9bec7f1a1670819833240f027b25eff', 'https://api.0x.org/'),
      POL = new Chain('c2', 'Polygon', 'POL', 'MATIC', 137, '0x89', '0xdef1c0ded9bec7f1a1670819833240f027b25eff', 'https://polygon.api.0x.org/'),
      AVA = new Chain('c3', 'Avalanche', 'AVA', 'AVAX', 43114, '0xa86a', '0xdef1c0ded9bec7f1a1670819833240f027b25eff', 'https://avalanche.api.0x.org/')]

//#endregion

//#region               const TOKEN DATA



const BSCTokens = [
      BUSD = new Token('t0', 'Binance USD', 'BUSD', '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 'BSC', 1, 0, 0, '0x00'),
      USDT = new Token('t1', 'Tether USD', 'USDT', '0x55d398326f99059ff775485246999027b3197955', 'BSC', 1, 0, 0, '0x00'),
      USDT = new Token('t1', 'Pancake Swap', 'CAKE', '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 'BSC', 1, 0, 0, '0x00'),
      USDC = new Token('t2', 'USD Coin', 'USDC', '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 'BSC', 1, 0, 0, '0x00'),
      WBNB = new Token('t3', 'Wrapped BNB', 'WBNB', '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 'BSC', 1, 0, 0, '0x00'),
      BTCB = new Token('t4', 'Bitcoin on Binance', 'BTCB', '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', 'BSC', 1, 0, 0, '0x00'),
      LINK = new Token('t6', 'Chain Link', 'LINK', '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd', 'BSC', 1, 0, 0, '0x00'),
      ETH = new Token('t5', 'Binance Ethereum', 'ETH', '0x2170ed0880ac9a755fd29b2688956bd959f933f8', 'BSC', 1, 0, 0, '0x00'),
      DOT = new Token('t7', 'Polkadot', 'DOT', '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', 'BSC', 1, 0, 0, '0x00'),
      UNI = new Token('t8', 'Uni Swap', 'UNI', '0xbf5140a22578168fd562dccf235e5d43a02ce9b1', 'BSC', 1, 0, 0, '0x00'),
      DAI = new Token('t9', 'Maker DAO', 'DAI', '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 'BSC', 1, 0, 0, '0x00'),
      ADA = new Token('t10', 'Cardano', 'ADA', '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', 'BSC', 1, 0, 0, '0x00'),
      XRP = new Token('t11', 'Ripple', 'XRP', '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe', 'BSC', 1, 0, 0, '0x00'),
      BCH = new Token('t12', 'BitcoinCash', 'BCH', '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf', 'BSC', 1, 0, 0, '0x00'),
      EOS = new Token('t13', 'EOS Network', 'EOS', '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6', 'BSC', 1, 0, 0, '0x00'),
      INCH = new Token('t14', '1 Inch Network', '1INCH', '0x111111111117dc0aa78b770fa6a738034120c302', 'BSC', 1, 0, 0, '0x00'),
]

const ETHTokens = [
      USDT = new Token('t0', 'Tether USD', 'USDT', '0xdac17f958d2ee523a2206206994597c13d831ec7', 'ETH', 1, 0, 0, '0x00'),
      WBTC = new Token('t0', 'Wrapped Bitcoin', 'WBTC', '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 'ETH', 1, 0, 0, '0x00'),
      WXMR = new Token('t0', 'Monero', 'WXMR', '0x465e07d6028830124BE2E4aA551fBe12805dB0f5', 'ETH', 1, 0, 0, '0x00'),
      UNI = new Token('t0', 'Uni Swap', 'UNI', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 'ETH', 1, 0, 0, '0x00'),
]

//#endregion



module.exports = { allChains: allChains, BSCTokens: BSCTokens, ETHTokens: ETHTokens };
