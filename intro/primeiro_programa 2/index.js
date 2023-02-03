console.log("Hello World");

const fs = require("fs"); //fileSystem

fs.readFile("arquivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return
  } else {
    console.log(data);
  }
});
