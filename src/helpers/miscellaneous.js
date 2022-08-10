const fs = require('fs');

const overwriteDataFile = (file, updatedData) => {
  fs.writeFileSync(file, updatedData);
};

const addNewRegisterToList = (parsedList, newRegister) => {  
  parsedList.push(newRegister);
  
  return parsedList;
};

const removeRegisterFromList = (parsedList, registerId) => parsedList
    .filter((item) => item.id !== Number(registerId));

const convertJsListToJson = (jsList) => JSON.stringify(jsList, null, 2);

const updateJsonListFile = (file, parsedList, newRegister) => {
  const updatedJsList = addNewRegisterToList(parsedList, newRegister);
  const updatedJsonList = convertJsListToJson(updatedJsList);
  
  overwriteDataFile(file, updatedJsonList);
};

const deleteRegisterFromListFile = (file, parsedList, registerId) => {
  const updatedJsList = removeRegisterFromList(parsedList, registerId);
  const updatedJsonList = convertJsListToJson(updatedJsList);

  overwriteDataFile(file, updatedJsonList);
};

module.exports = {
  overwriteDataFile,
  updateJsonListFile,
  convertJsListToJson,
  addNewRegisterToList,
  deleteRegisterFromListFile,
};
