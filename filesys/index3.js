// dengan stream

const fs = require("fs");
const stream = fs.readFile("file.txt");
stream.on("data", (data) => {
  console.log(data);
});
