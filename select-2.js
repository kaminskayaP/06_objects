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

let arrayNumStr = [1, 2, 'три', 'четыре'];
let objNumStr = { 
  1: 1, 
  2: 'два',
  'три': 'три',
  'четыре': 4};

let body = document.body;
let select = document.createElement('select');
let option = [];
let i = 0;
let k = 0;

function createSelect(arrayObj, valueEntered = 'Stone') {
  let n = arrayObj.length;
  let arrayValue = [];

  arrayObj.forEach(function (element) {
    arrayValue.push(element.value)
  })

  console.log(arrayObj)

  if (arrayValue.indexOf(valueEntered) > -1) {
    i = arrayValue.indexOf(valueEntered);
  } else {
    i = 0;
  }

  for (k; k < n; k++) {
    option[k] = document.createElement('option');
    option[k].value = arrayObj[i].value;
   
    option[k].innerHTML = arrayObj[i].label;
    i--;
    if (i < 0) {
      i = n - 1;
    }
    select.append(option[k]);
  }

  body.append(select);
  return select;
}
 
function checkArray(array) {
  if (typeof array[0] !== 'object') {
    return true;
  } 
  return false; 
}

function convertToArrObjs(entity, check) {
 if (check) {
  i = 0;
  arrayObj = [];
  if (entity.length === undefined) {

    let labels = Object.keys(entity);
    let values = Object.values(entity); 

    for (i; i < labels.length; i++) {
        arrayObj.push({value: values[i], label: labels[i]});
      }
    return arrayObj;
  } else {
      for (i; i < entity.length; i++) {
        let a = String(entity[i]);
        arrayObj.push({value: a, label: a});
      }
    return arrayObj;
  }
 } else {
   return entity;
 }
}


createSelect(convertToArrObjs(arrayNumStr, checkArray(arrayNumStr)), 'три');