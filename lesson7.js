// 1. 
/*  
Основные принципы чистого кода:
KISS - "Поддерживать его просто глупо" - принцип который строиться на том что в разработке нужно придерживаться максимально простых решений. 

DRY - "Не повторяй себя" - принцип строиться на том что код должен быть оптимизирован, и один и тот же кусок кода не дожен повторяться (например из него можно сделать функцию). Впервые с этим принципом сталкнулся в вёрстке, когда одни и теже стили можно применить для разных участков кода.

YAGNI - "Тебе это не нужно" - принцип строиться на том что бы избегать действий с кодом которые в последствии не пригодяться в проекте. Как я это понимаю, что отсюда вытекает что не нужно усложнять код до вещей которые не пригодяться

Основные анти-принципы чистого кода:
Spaghetti code - код в котором можно запутаться и сложно читать

Big Ball of Mud - не структурированный код, в котором сложно разобраться что в нём написанно

God object - наоборот объект или кусок кода который слишком сложный и может делать много вещей одновременно 

Copy-Paste Programming - метод когда мы нарушаем принцип DRY и копируем куски одного и того же кода. 

Так же излишнее коментирование кода будет плохим решением т.к грамотно написанный код с правельно подобранными именами функций и переменных по сути является коментарием
*/

//2. 
/* 
localStorage / sessionStorage - если по простому то это внутренний объект браузера который хранит в себе информацию в формате ключ: значение и доступен в пределах одного домена. Имеют схожие методы работы (get/set/clear и тд.) Но отличаются временем хранения информации. Local - оставит информацию даже при перезагрузке OC а Session пока мы не закроем вкладку (используется крайне редко). Так же этот объект у нас не резиновый и мы можем хранить информацию 
~5 мб (можно настроить и увеличеть). Важно что информация должна быть в формате строки (например можно её перевести в JSON). На практике я сохранял позицию скрола пользователя, некоторые чекбоксы и тд.  

Coockie - это небольшие фрагменты данных которые присылает сервер и они храняться на устройстве клиента (coockieStorage) котороые хранят информацию о предпочтнеиях пользователя (например данные для повторной авторизации или тавары которые просматривал пользователь в интернет магазине). Как правило имеют зашифрованный вид. 
*/

// 3. 
/* 
HTML - Язык гипертекстовой разметк. Базовые элементы:
<!DOCTYPE> - указывает на версию текущего документа (опциональный)
<head></head> - Главный настроечный тег (содержит в себе все настройки сайта, мета данные, линки и тд.)
<body></body> - всё видемое содержимое сайта.
CSS - Каскадная таблица стилей. Используется для стилизации HTML документа. 
Основной синтаксис:
Селектор {
  свойство: значение;
}
 БЭМ - Методология которую создал Яндекс для правильного нейминга классов в проекте что позволяет делать код более понятным и легкочитаемым. Абривеатура состоит из 3 частей:
 Блок - независимая часть страницы
 Элемент - часть блока которая осмысленно отосится к нему
 Модификато - свойство блока или элемента которая меняет его внешний вид или поведение (например цвет кнопки)
*/

// 4.
/* 
Функциональное програмирование построена на базисе что функции используются как основной строительный блок. 
Примеры этой парадигмы: Функции типа map / filter / reduce. Либо Функции с замыканием либо функции высшего порядка. 
*/

// 5. 
/* 
  Позиционирование в CSS достигается изменением своства position у элемента на такие значениея как:
  relativ - относительный (можем применять top/left ...) 
  absolut - абсолютное (можем применять top/left ...) ищет радителя с relativ если нет то отталкивается от body 
  fixed - фиксированное (можем применять top/left ...) относительно экрана пользователя
  stiky - липкий используется в приделах какого то блока
*/

// 6
/* Вес селектора - показывает его приоритет (специфичность) по отношениию к другим элементам
  * - уневерсальный селектор (самый низкий вес) 
  tag - селектор тега (1)
  .class / [atribute] - селектор класса и атребута (10)
  #id - селектор ИД самый высокий приоритет селектора в CSS (100)
  выше приоритет у атрибута style - инлайновые стили
  !important - ключевое слово которое перебивает даже инлайновые стили

  Так же селекторы можно комбинировать что бы повышать их вес например .class tag (101)
*/
