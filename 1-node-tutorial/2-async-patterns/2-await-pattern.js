const { readFile, writeFile } = require("fs");
const util = require("util");
// Its “promisify” method transforms callback-based functions into Promise-based ones.
// This allows the use of async/await syntax for cleaner, more readable asynchronous code.
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `This is AWESOME : ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

// use Promise
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// async await with try-catch
// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

start();

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
