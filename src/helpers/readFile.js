const fs = require('fs');

const readJsonToBuffer = (fileName) => fs.readFileSync(fileName);
const convertBufferToJSON = (bufferData) => bufferData.toString('utf-8');
const convertJSONtoJS = (jsonFile) => JSON.parse(jsonFile);
const getDataFromFile = (fileName) => {
  const bufferData = readJsonToBuffer(fileName);
  const jsonData = convertBufferToJSON(bufferData);
  return convertJSONtoJS(jsonData);
};

module.exports = {
  readJsonToBuffer,
  convertBufferToJSON,
  convertJSONtoJS,
  getDataFromFile,
};