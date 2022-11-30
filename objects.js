/*
1. 
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
let user = {};
Добавьте свойство name со значением John.
user.name = "John";
Добавьте свойство surname со значением Smith.
user.surname = "Smith"
Измените значение свойства name на Pete.
user.name = "Pete";
Удалите свойство name из объекта.
delete user.name;

2.
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let object = {};

function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}
let key = prompt("enter a key")
alert (isEmpty(object[key])) 



3.
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

это будет работать?
user.name = "Pete";

Yes, Объявление const защищает только саму переменную от изменений.

4.
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.

let sum = 0;
for (salary in salaries)
    {sum = sum + salaries[salary]
     console.log(sum);};


5.
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.

function multiplyNumeric(obj){
for (key in obj){
 if(typeof(obj[key]) == 'number'){console.log(obj[key]*2);}}}


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
*/