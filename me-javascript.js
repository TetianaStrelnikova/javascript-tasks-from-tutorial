`use strict`;
/*alert ("Me Javascript from outside!");
let myname = prompt("What is your name?", "");
alert (myname);

Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1, b = 1; 
let c = ++a; // 2 ? префиксный инкремент возвращает переменную с изменениями
let d = b++; //  1? постфиксный инкремент возвращает переменную без изменений

Чему будут равны переменные a и x после исполнения кода в примере ниже?
let a = 2;
let x = 1 + (a *= 2); - a= 2*2//4 - x=5

Какой результат будет у выражений ниже?
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false// 1
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//9px"$" + 4 + 5//$45
"4" - 2 // 2
"4px" - 2 // Nan
"  -9  " + 5 //" -9 5"
"  -9  " - 5 // -14
null(null становится 0 после численного преобразования.) + 1 //1
undefined (undefined становится NaN после численного преобразования.)+ 1 //Nan
" \t \n"(Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число) - 2 // -2



Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. 
Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(a + b); // 12 //alert(+a + +b)


Число 0, пустая строка "", null, undefined и NaN становятся false. Из-за этого их называют «ложными» («falsy») значениями.
Остальные значения становятся true, поэтому их называют «правдивыми» («truthy»).

Каким будет результат этих выражений?

5 > 4 // true
"ананас" > "яблоко" // 
"2" > "12"//  true (Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".)
undefined == null  //true
undefined === null //false (Строгое сравнение разных типов.)
null == "\n0\n" // false null== undefined
null === +"\n0\n" //false (Строгое сравнение разных типов.)


Выведется ли alert?
if ("0") {
  alert( 'Привет' );
}// Yes "0"=  (Любая строка, кроме пустой (а строка "0" – не пустая), в логическом контексте становится true.)


Используя конструкцию if..else, напишите код, 
который будет спрашивать: 
„Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», 
то показать: «Верно!»,
в противном случае – отобразить: 
«Не знаете? ECMAScript!»

let javascriptName = prompt("Какое «официальное» название JavaScript?","");
(javascriptName == "ECMAScript")?
alert(«Верно!»):alert(«Не знаете? ECMAScript!»);

Используя конструкцию if..else, напишите код, 
который получает число через prompt, 
а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.


let myNumber = prompt("Please,enter the number?");
(myNumber >0)? alert (1):
(myNumber <0)? alert (-1):
(myNumber ==0)? alert (0);


Перепишите конструкцию if с использованием условного оператора '?':

let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result =(a + b < 4)? 'Мало': 'Много';


Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

message = (login == 'Сотрудник')?'Привет':
        (login == 'Директор')?'Здравствуйте':
        (login == '')?'Нет логина':
        '';


