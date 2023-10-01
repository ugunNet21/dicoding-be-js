const fs = require("fs");
const fileName = "file.txt";

const data = fs.readFileSync(fileName);
console.log(data);
