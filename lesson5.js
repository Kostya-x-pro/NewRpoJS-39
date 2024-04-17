// 1. Алгоритмы сортировок бывают:
// * Сортировка пузырьком;
// * Сортировка выбором;
// * Циклическая сортировка;
// * Быстрая сортировка;
// По факту из того что я понял "быстрая сортеровка" в большинстве случаев является самой приоритетной. Так как мы двигаемся по массиву с двух сторон к центральному элементу и сложность этого алгоритма в лучшем случаии будет O(n * log n). Если центральный элемент не будет самым маленьким или самым большим в противном случаии мы получим O(n2) как и в остальных видах сортировок.

// 2. 
      // 2.1 Обычный литеральный объект 
  // const person = {
  //   name: 'Alex',
  //   surename: 'Smith',
  //   age: 30,
  //   sayGreating: function() {
  //     console.log(`My name is ${this.name} ${this.surename}`);
  //   }
  // }
  
      // 2.2 Создание объекта с помощью функции конструктора  
// function Person(name, surename, age) {
//   this.name = name;
//   this.surename = surename;
//   this.age = age;
//   this.sayGreating = function() {
//     console.log(`My name is ${this.name} ${this.surename}`);
//   }
// }

// const alex = new Person('Alex', 'Smith', 30);

      // 2.3 Создание объекта с помощью классов (красивая обертка функции конструктора) 
class Person {
  constructor(name, surename, age) {
    this.name = name;
    this.surename = surename;
    this.age = age;
  }

  sayGreating() {
    console.log(`My name is ${this.name} ${this.surename}`);
  }

}

const alex = new Person('Alex', 'Smith', 30);
    // добовляем метод через свойство proto
Person.prototype.logInfo = function() {
  console.log(`Person: ${this.name} ${this.surename} and age: ${this.age} has skill`);
}

const person2 = new Person('John', 'Shepard', 32);
  alex.logInfo();
  person2.logInfo();

// 3. 
class PersonThree extends Person {
  // Если не ошибаюсь то в таком формате (если мы нечего не добовляем в параметры) то конструктор можно удалить (вроде бы называется синаксис полей классов).

  // constructor(name, surename, age) {
  //   super(name, surename, age);    
  // }

get personName() {
  return this.name;
}

set personName(newName) {
  return this.name = newName;
}
}

const john = new PersonThree('Jhon', 'Jackson', 34);
console.log(john.personName); // свойство акцессер гетер
console.log(john.personName = 'Maxim'); // свойство акцессер сетер

// 4. функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
  let result = [0, 0];

 for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === total) {
      result[0] = arr[i]
      result[1] = arr[j]
      return result;  // return важно выполнить именно здесь что бы прервать цикл и вернуть значения
    }
  }
 } 
}

console.log(firstSum(arr,total));

// Сложность у этого алгоритма будет равна O(n2) потому что по факту мы выполняем пузырьковую сортировку. 
