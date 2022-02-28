const machine = require("./");
const concat = require('concat-stream')

function testSchema(data, cb) {
  const generator = machine.obj();

  generator.pipe(
    concat(function (schemaStr) {
      console.log(schemaStr);
      try {
        const schema = vm.runInNewContext(schemaStr, { Joi: Joi });
        schema.validate(data, function (er) {
          if (er) return cb(er);
          cb(null, schema);
        });
      } catch (er) {
        cb(er);
      }
    })
  );

  generator.write(data);
  generator.end();
}

const JSON_MOCK = {
  "payments": [
    {
        "paymentSystem": "",
        "paymentSystemName": "",
        "group": "",
        "installments": 1,
        "installmentsInterestRate": 0,
        "installmentsValue": 300,
        "value": 300,
        "referenceValue": 300
      }
  ],
  "giftCards": []
}

testSchema(JSON_MOCK, function () {})