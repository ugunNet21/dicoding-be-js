const fs = require("fs");

const readableStream = fs.creatReadStream("../file.txt", {
  highWaterMark: 10,
});

readableStream.on("readble", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {}
});

readableStream.on("end", () => {
  console.log("Done");
});
