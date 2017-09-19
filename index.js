'use strict';

var bitcore = module.exports;

// module information
bitcore.version = 'v' + require('./package.json').version;
bitcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bitcore-bip39 found. ' +
      'Please make sure to require bitcore-bip39 and check that submodules do' +
      ' not also include their own bitcore-bip39 dependency.';
    throw new Error(message);
  }
};
bitcore.versionGuard(global._bitcore);
global._bitcore = bitcore.version;

// crypto
bitcore.crypto = {};
bitcore.crypto.BN = require('./lib/crypto/bn');
bitcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
bitcore.crypto.Hash = require('./lib/crypto/hash');
bitcore.crypto.Random = require('./lib/crypto/random');
bitcore.crypto.Point = require('./lib/crypto/point');
bitcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
bitcore.encoding = {};
bitcore.encoding.Base58 = require('./lib/encoding/base58');
bitcore.encoding.Base58Check = require('./lib/encoding/base58check');
bitcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
bitcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
bitcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
bitcore.util = {};
bitcore.util.buffer = require('./lib/util/buffer');
bitcore.util.js = require('./lib/util/js');
bitcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
bitcore.errors = require('./lib/errors');

// main bitcoin library
bitcore.Address = require('./lib/address');
bitcore.Block = require('./lib/block');
bitcore.Bip39 = require('./lib/bip39');
bitcore.MerkleBlock = require('./lib/block/merkleblock');
bitcore.BlockHeader = require('./lib/block/blockheader');
bitcore.HDPrivateKey = require('./lib/hdprivatekey.js');
bitcore.HDPublicKey = require('./lib/hdpublickey.js');
bitcore.Networks = require('./lib/networks');
bitcore.Opcode = require('./lib/opcode');
bitcore.PrivateKey = require('./lib/privatekey');
bitcore.PublicKey = require('./lib/publickey');
bitcore.Script = require('./lib/script');
bitcore.Transaction = require('./lib/transaction');
bitcore.URI = require('./lib/uri');
bitcore.Unit = require('./lib/unit');

// dependencies, subject to change
bitcore.deps = {};
bitcore.deps.bnjs = require('bn.js');
bitcore.deps.bs58 = require('bs58');
bitcore.deps.Buffer = Buffer;
bitcore.deps.elliptic = require('elliptic');
bitcore.deps._ = require('lodash');

// Register Emercoin network
bitcore.Networks.add({
  name: 'emcnet',
  alias: 'emercoinnet',
  pubkeyhash: 0x21,
  privatekey: 0x80,
  scripthash: 0x5c,
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  networkMagic: 0xe6e8e9e5
});

// Internal usage, exposed for testing/advanced tweaking
bitcore.Transaction.sighash = require('./lib/transaction/sighash');
