const Converting = require('./Converting/index');
const Args = process.argv.slice(2);
const converting = new Converting(Args);
converting.Print();
