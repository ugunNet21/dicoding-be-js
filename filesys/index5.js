const fs = require('fs');

const fileName = './file.txt';

fs.readFile(fileName, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const tasks = data.split('\n');

    console.log('Di hari minggu saya akan:');

    tasks.forEach((task) => {
      console.log(`  ${task}`);
    });
  }
});