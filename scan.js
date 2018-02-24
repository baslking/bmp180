var i2c = require('i2c-bus');

i2c.scan((err, data)=> {
      data.forEach((item) =>{
        console.log(item);
      });
    });