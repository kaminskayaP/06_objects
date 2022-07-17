function createSelect(arrayObj, valueEntered = null) {
  let select = document.createElement('select');
  for (let item of arrayObj) {
    let option = document.createElement('option');
    option.value = item['value'];
    option.innerHTML = item['label'];
    if (option.value === valueEntered) {
      option.selected = 'selected';
    }
    select.append(option);
  }
  return select;
}

function checkArray(array) {
  if (typeof array[0] !== 'object') {
    return true;
  } 
  return false; 
}

function prepareArray (array) {
  let arrayNumStr = [];
  let arrayObjAdd = [];
  let arrayObj2= [];

  let i = 0;
  if (array.length !== undefined) {
    for (i; i < array.length; i++) {
      if (typeof array[i] !== 'object') {
        arrayNumStr.push(array[i]);
      } else {
        arrayObjAdd.push(array[i]);
      }
    }
    if (arrayNumStr.length > 0) {
      arrayNumStr = convertToArrObjs(arrayNumStr);
    } 
  return arrayObjAdd.concat(arrayNumStr);
  } else {
      let labels = Object.keys(array);
      let values = Object.values(array); 

      for (i; i < labels.length; i++) {
          arrayObj2.push({value: values[i], label: labels[i]});
        }
    return arrayObj2;
  }
}

function convertToArrObjs(entity) {
  let i = 0;
  let arrayObj3 = [];
  if (entity.length === undefined) {

    let labels = Object.keys(entity);
    let values = Object.values(entity); 

    for (i; i < labels.length; i++) {
        arrayObj3.push({value: values[i], label: labels[i]});
      }
    return arrayObj3;
  } else {
      for (i; i < entity.length; i++) {
        let a = String(entity[i]);
        arrayObj3.push({value: a, label: a});
      }
    return arrayObj3;
  }
}


let arrayObj = [];
arrayObj[0] = {
  value: 'Paper',
  label: 'Бумага',
};
arrayObj[1] = {
  value: 'Stone',
  label: 'Камень',
};
arrayObj[2] = {
  value: 'Wood',
  label: 'Дерево',
};
arrayObj[3] = 3;

let arrayNumStr = [1, 2, 'три', 'четыре'];
let objNumStr = { 
  1: 1, 
  2: 'два',
  'три': 'три',
  'четыре': 4};


document.body.append(createSelect(prepareArray(arrayNumStr), '2'));