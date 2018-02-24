# BMP180.js 

Access a [BMP180](https://www.bosch-sensortec.com/bst/products/all_products/bmp180) temperature & barometric pressure sensor from your Raspberry Pi using Node.js.  This was forked from  [dbridges bmp085](https://github.com/dbridges/bmp085). The i2c library is no longer maintained and is frequently replaced by the [i2c-bus](https://github.com/fivdi/i2c-bus) library that is actively maintained. Additionally, the Bosch bmp085 sensor is no longer available and had been replaced by the bmp180, which uses the same set of instructions. 

### Install

```
$ npm install bmp180-sensor
```

### Usage

With no units specified, returns inHg and degree F.
```javascript
var bmp180 = require('bmp180-sensor');

var sensor = bmp180({address: 0x77,
                     mode: 3});

sensor.read(function (err, data) {
  // data is { pressure: 29.957463223223005, temp: 68.9 }
});

```

You can also specify metric units, returning Pa and degree C:

```javascript
var bmp180 = require('bmp180-sensor');

var sensor = bmp180({address: 0x77,
                     mode: 3,
                     units: 'metric'});

sensor.read(function (err, data) {
  // data is { pressure: 101435.97, temp: 20.5 }
});

```
