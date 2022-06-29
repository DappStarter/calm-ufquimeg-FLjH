require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot filter december stick color grace define army gift'; 
let testAccounts = [
"0x63f330482ae60f5b5c2176d486fc879bfd38ffca227da78ded74ccb112a4ebfa",
"0x023cf4adb3ba02ce97ce4c9b80dc7dfc95c56994d118f39b185d2ce7d25bf19c",
"0xb7023ac1665b2e5d6a4eccf14dd28965b1ab1c94954685bce8682ba64dd7d757",
"0x2e38725d2cd2a70476dd23448a48ec94dae03ec071d836ecd21685dbfbd3015c",
"0x26e52ab75ff0891e071843923512a7501ad0adb333ded9845e818b58bbc37f98",
"0x49521783e32d832f46cfed08e86cd4f69b7fa365163e490f464e19e856b0b0d7",
"0x6466786e3d1b56cbf100a1cd29ecf202c614a1668943ac2125bd6be036cabcbd",
"0x1708bfc766a8e51c69360dd8df60b392ae1807f47440d31ab57b24bfb9701433",
"0x0b0fa48ab57bdf79f857fb5d0d8393deca963d3542ead967591774457a69deb1",
"0xdcbc78cc5b5cafd8527a1e951441a45fd9fb62c83dfdabda2f4900495e9b35b3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

