// 1. task
const counter = {}; // литеральный способ
const counter1 = new Object(); // синтаксис конструктор Объекта

// 2. task (поверхностные копии).
const counter2 = Object.create(counter); // метод глобального объекта Object который на этапе создания объекта задаёт ему прототип какой то объект (который будет уметь делать все тоже что и counter)
const counter3 = Object.assign({}, counter) // метод глобального объекта Object который создаёт поверхностную копию объекта
const counter4 = {...counter} // Способ создания копии (поверхностной) существующего объекта с помощю оператора разворота (spret operator) таким способом можно копировать и массивы.

// Собственная функция для поверхностной копии с помощью перебора объекта for in (просто перебераю целевой объект и поэтапно копирую в пустой) затем возвращаю новый.
function copyObj(mainObj) {
  let newObj = {};

  for (let key in mainObj) {
    newObj[key] = mainObj[key]
  }
  return newObj;
}
// Глубокие копии всегда делал с помощью JSON (ранее слышал про structuredClone() но на практике не применял )
const counter5 = JSON.parse(JSON.stringify(obj));
const counter6 = structuredClone(counter); // опять же работает хорошо со всем но если в объекте будет функция то будут пробемы.
// либо создать свою собственную функцию с каким то рекурсивным подходом.
// 3. task
function makeCounter() {} // function declaration  (имеет всплытие как и var. может быть вызванна до объявления)
const makeCounter1 = function() {} // function expresion (функциональное выражение. По сути эта переменная которой мы задаём имя и саму функциию) в отличиии от F declaration её можно вызвать после описания функции. 
const makeCounter2 = () => {} // стрелочная функция имеет как свои плюсы так и минусы и применять везде её тоже не стоит. Имеет короткий синтаксис, выполняется в потоке кода но не имеет своего контекста this (ищёт его у своего родителя).

// B1. 
// В этой функции мы поочередно сравниваем значения массива и если наткнулись на объект, опять его переводим в массив и сравниваем по значениям если все ОК возвращаем true
const deepEqual = (obj1, obj2) => { 
  const arr1 = Object.values(obj1);
  const arr2 = Object.values(obj2);

  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== 'object') {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } else {
      if (!deepEqual(arr1[i], arr2[i])) {
        return false;
      }
    }
  }

  return true;
}; 

// B2.

function reverseStr(str) {
  return str.split('').reverse().join('');  // разбиваем строку на массив по буквам, разворачиваем массив, склееваем все обратно
}