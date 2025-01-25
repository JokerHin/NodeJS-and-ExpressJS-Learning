const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

// show the last/ base filename
const base = path.basename(filePath);
console.log(base);

// all the whole path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
