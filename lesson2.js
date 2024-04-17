// 1) метод запроса OPTIONS - нужен для того что бы узнать какие методы в принципе поддерживает сервер отправляет заголовок content-type и получает ответ по методоам в allow-methods. Чаще всего используется в CORS запросах при запросах на сторонние домены.
/* Использует такие заголовки как: 
    Access-Control-Request-Headers  
    Access-Control-Allow-Headers  
  и методы:
    Access-Control-Request-Method  
    Access-Control-Allow-Method  
    Access-Control-Allow-Origin  
*/

// 2) Из статьи на habr сделал несколько выводов для себя. HTTP3 - По сути является доработанной версией HTTP2. Он считается более защищенным и стабильным так как использует все то же шифрование TLS и обновленную версию TCP которую назвали QUIC. QUIC - по сути стал новым стандартом который позволяет решить такие проблемы как потеря пакетов во время перехода из одной сети на другую (например с wifi на 4G) а так же для его развития не потребуется изменять промежуточные точки передачи данных например прокси а достаточно обновлять устройство клиента и сервера. 

// 3) AbortController - является методом для прирывания асинхронных задач, и не только в методе fetch. На практике пока что не доводилось использовать

// 4)
const str = 'text'; // string
const str2 = String('text'); // str

const num = 5; // number
const num2 = Number(5); // num

const bol = true; // boolean
const bol2 = Boolean(true); //boolean
const bol3 = !!1; //boolean

const IamNull = null; //null

const IamUndefined = undefined // undefined
let IamUndefined2; // undefined

let id = Symbol('id') //symbol
let bigInt = 1n; // bigint
let bigInt2 = BigInt(10); // bigint


// 5) ReferenceError - это ошибка обращения она сообщает нам о том что значение переменной не определено. Думаю это связанно с тем что let и const имеют блочную область видимости, и их всплытие ограниченно мертвой зоной. 

// 6) 
const res = "B" + "a" + (1 - "hello");
console.log(res); // "BaNaN" - так как у оператора групперовка (скобки) приоритет выше то сначала будет NaN а затем конкатенация строк.

const res2 = (true && 3) + "d";
console.log(res2); // '3d' - оператор && ищет первую неправду (если такового нет, то возвращает последнее значение) + конкатенация

const res3 = Boolean(true && 3) + "d";
console.log(res3); // 'trued' - в скобках вернётся 3-ка (а она в логическом контексте true) + склеевание строки
