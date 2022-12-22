/*Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt)
и после показывает их сумму.*/

let a = +prompt("Enter a number a:");
let b = +prompt("Enter a number b:");
let c = a + b ;
alert(`the sum a plus b is ${c}`)

/*Создайте функцию readNumber, 
которая будет запрашивать ввод числового значения до тех пор, 
пока посетитель его не введёт.
Функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, 
отправив пустую строку или нажав «Отмена». 
В этом случае функция должна вернуть null.*/

function readNumber2(){
    let number;
    do{ number = prompt("enter a number")}
    while(!isFinite(number))
    if (number === null || number === '') {return null;}
    return +number;
    alert +number;}
    
function random(min, max){
        let n = Math.random().toFixed(1)*10;
        if(n<=max && n>min){alert(n);}
        else{random(min,max)}}
random(1, 10)
/*
Случайное целое число от min до max

Напишите функцию randomInteger(min, max), 
которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max 
должно появляться с одинаковой вероятностью.
*/
