/*
1.
Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.

решение
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

2.
//Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму этих свойств.
//mul() возвращает произведение этих свойств.
Например:
function Calculator(){
      this.read =  function read() {this.a = prompt("enter a",0);
                       this.b =  prompt("enter b",0);};
      this.sum = function sum() {
      return ((this.a) + (this.b)); }
      this.mul = function mul(){ return(this.a*this.b)}
}


let calculator = new Calculator();
calculator.read();
console.log(calculator.a)
console.log(calculator.b)
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


3.
//Создайте функцию-конструктор Accumulator(startingValue).
//Объект, который она создаёт, должен уметь следующее:
//Хранить «текущее значение» в свойстве value. 
//Начальное значение устанавливается в аргументе конструктора startingValue.
//Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
//Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

//Ниже вы можете посмотреть работу кода:

function Accumulator(startingValue){
          this.value = startingValue;
          this.read = function read(){ 
                                     let a  = prompt ("a?",0);
                                     this.value = this.value + a;}
                                 
           
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/