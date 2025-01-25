//CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share mininum)
const names = require("./4-name.js");
const sayHi = require("./5-utils.js");
const data = require("./6-alternative-flavor.js");

console.log(data);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
