// Streams (4 types)
// -Writeable
// -Readbale
// -Duplex
// -Transform

const { createReadStream } = require("fs");

const stream = createReadStream("./content/first.txt", {
  highWaterMark: 90000,
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/first.txt', { highWaterMark: 9000 });
// const stream = createReadStream('./content/first.txt', { encoding: 'utf8' });

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (error) => {
  console.log(error);
});
