const fs = require('fs');
const path = require('path');

const readJson = require('./helpers/readJson');

const init = async () => {
  try {
    const config = await readJson('config.json');

    for (let i of config) {
      for (let b = 1; b <= i.replicates; b++) {
        const newFileName = `${b}.${i.file_name.split('.')[1]}`;

        const filePath = (storeinfopath = path.join(
          __dirname,
          `./data/${i.file_name}`
        ));

        const outputFilePath = (storeinfopath = path.join(
          __dirname,
          `./data/${newFileName}`
        ));
        fs.readFile(filePath, function (err, data) {
          if (err) throw err;

          fs.writeFile(outputFilePath, data, function (err) {
            if (err) throw err;
            console.log(`File created: ${newFileName}`);
          });
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
};

init();
