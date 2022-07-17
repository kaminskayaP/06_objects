// export default function arrayPropFilter (objects, prop, firstData) {
//   let filteredArray = [];
//   for (let obj of objects) {
//     let {name, surname} = obj;
//     if (firstData === name || firstData === surname) {
//      filteredArray.push(obj);
//     }
//   }
//   return filteredArray;
// }

  
 
  // let result = filter(objects, 'name', 'Иван');
  
  /*
  Результат выполнения должен быть:
  [
  { name: 'Иван', surname: 'Иванов' }
  ]
  */

  let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]

function filterByName (objects, prop, firstData) {

  return objects.filter((item) => { 
    return item[prop] === firstData;
  })
}

console.log(filterByName(objects, 'surname', 'Васильев'));