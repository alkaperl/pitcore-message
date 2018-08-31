<img src="http://bitcore.io/css/images/module-message.png" alt="pitcore message" height="35">
# Pitcoin Message Verification and Signing for Pitcore


[![NPM Package](https://img.shields.io/npm/v/pitcore-message.svg?style=flat-square)](https://www.npmjs.org/package/pitcore-message)
[![Build Status](https://img.shields.io/travis/alkaperl/pitcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/alkaperl/pitcore-message)
[![Coverage Status](https://img.shields.io/coveralls/alkaperl/pitcore-message.svg?style=flat-square)](https://coveralls.io/r/alkaperl/pitcore-message?branch=master)

pitcore-message adds support for verifying and signing pitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main pitcore repo](https://github.com/alkaperl/pitcore) for more information.

## Getting Started

```sh
npm install pitcore-message
```

```sh
bower install pitcore-message
```

To sign a message:

```javascript
var pitcore = require('pitcore-lib');
var Message = require('pitcore-message');

var privateKey = pitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/alkaperl/pitcore/blob/master/CONTRIBUTING.md) on the main pitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/alkaperl/pitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Pitcoin Core Developers

# pitcore-message
