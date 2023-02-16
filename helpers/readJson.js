const fs = require('fs-extra');
const path = require('path');

module.exports = readJson = async (filename) => {
  const filePath = (storeinfopath = path.join(
    __dirname,
    `../${filename}`
  ));

  const data = await fs.readJson(filePath);
  return data;
};
