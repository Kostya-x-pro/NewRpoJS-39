// 1.
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a"); // Promise в состоянии resolv
});

promiseTwo
.then((res) => {
  return res + "b"; // вернёт a + b 
})
.then((res) => {
  return res + "с"; // добавит "ab" + "c"
})
.finally((res) => {
  return res + "!!!!!!!"; // не выполниться так как мы потыаемся изменить значение промиса что недопустимо для finally
})
.catch((res) => {
  return res + "d"; // не выполниться и пропустит дальше
})
.then((res) => {
  console.log(res); // выдаст "abc!!!!!!!"
});

// 2.
function doSmth() {
  return Promise.resolve("123");
}

doSmth()
.then(function (a) {
  console.log("1", a); // консоль выдаст "1" и "123"
  return a;
})
.then(function (b) {
  console.log("2", b); // консоль выдаст "2" и "123"
  return Promise.reject("321"); // промис перейдет в состояние отклонено значит сработает catch
})
.catch(function (err) {
  console.log("3", err); // консоль выдаст "3" и "321";
})
.then(function (c) {
  console.log("4", c); // консоль отработае и выдаст "4" и "undefined" (потому что в then выше мы певели результат в reject)
return c;
});

// 3. 
const arr = [10, 12, 1.2, 15, 21];

function getFullNumbersWithTimeout(arr) {
  let count = 0;

  // После просмотра обучающих видосов, открыл для себя способ рекурсивного запуска setTimeout (который позволяет избежать некоторых проблем которые могут возьникнуть у setInterval).
  let id = setTimeout(function logNumbers() {
    if (Number.isInteger(arr[count])) { // в этой строчке я проверяю число на целостность. Хотел сделать что бы таймаут в этом месте не срабатывал но что то ничего не придумал и имею просадку во времени 2 сек с каждого не целого числа.
      console.log(arr[count]);
    }
    count++;
    id = setTimeout(logNumbers, 2000);
  
    if (count > arr.length - 1) {
      clearInterval(id);
    };
  }, 2000)
}

getFullNumbersWithTimeout(arr);
