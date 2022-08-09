const fs = require('fs');

const overwriteDataFile = (file, updatedData) => {
  fs.writeFileSync(file, updatedData);
};

const updateList = (parsedList, newRegister) => {  
  parsedList.push(newRegister);
  
  return parsedList;
};

const convertJsListToJson = (jsList) => JSON.stringify(jsList, null, 2);

const updateJsonListFile = (file, parsedList, newRegister) => {
  const updatedJsList = updateList(parsedList, newRegister);
  const updatedJsonList = convertJsListToJson(updatedJsList);
  
  overwriteDataFile(file, updatedJsonList);
};

module.exports = {
  updateList,
  overwriteDataFile,
  updateJsonListFile,
  convertJsListToJson,
};
