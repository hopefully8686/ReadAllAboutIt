const groupBy = (objectArray, property) => {
  console.log(objectArray);
  return objectArray.reduce((accumulator, object) => {
    var key = object[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(object);
    return accumulator;
  }, {});
}

export default groupBy;