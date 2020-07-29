require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remind mixture grace beauty flower tennis'; 
let testAccounts = [
"0x210f369a19645969a9ef3016ea74831fb50722ece4e1ead1e9bbdf5601bdaaaa",
"0x76fb89bfdc123d9447aa6db03b702b72332c037ca3b32b604d89997d35962f5d",
"0x3b85d6a84fba58ae56db28568cedd66dd762f81a6f732b807ffc8bd4897c629d",
"0x2ca3e21ff932248336c8abba5430bf3206fd767d7e1917661759237e70aed77f",
"0x7583a2baf76d02eebe8c6a5b7d5ba234d53de3ba723289fb6ea02199d93a9fc5",
"0xa677210ef75a94aec91c14d05cf391e3816dd14308e643a8e93f2b72c7c66524",
"0x3cb2b6885a90b7f521eb82b07a25ae7c6b2f42ac0ac6304ca44ca88baa7ee7bf",
"0xfabd976318ce044c755e0dbab96baf738e03729b3bcd19ad07631252a259d691",
"0x280474849f0135c91edbef6a721678625efdcd30f981f1c42123c0eb4bf49307",
"0x773d20d102e49542e6adf04770e25ecb2e3ba40d0540e922fdb98a7b9cbbc336"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
