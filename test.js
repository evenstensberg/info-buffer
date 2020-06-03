const InfoBuffer = require('./index');

const buffer = new InfoBuffer();

buffer.log("log");

buffer.wait();

buffer.log("Not logged");

buffer.resume();

buffer.log("this");

buffer.broadcast();