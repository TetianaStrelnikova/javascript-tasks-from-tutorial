/*
1.
Здесь функция makeUser возвращает объект.
Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this};}
let user = makeUser();

alert( user.ref.name ); // undefined

2.
Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
                    read(){
                                  this.b = prompt("Enter b");
                                  this.a = prompt("Enter a");},
                    sum(){return this.a + this.b;},
                    mul(){return this.a * this.b;}};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

3.
//У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  
  up() {
    this.step++;
    return this;},
  
  down() {
    this.step--;
    return this;},
  
  showStep: function() { alert( this.step ); return this; },  // показывает текущую ступеньку
  smth:function(){ladder.up();
                  ladder.up();
                  ladder.down();
                  ladder.showStep(); 
                  ladder.down();
                  ladder.showStep(); }};
//Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
//Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
ladder.smth(); // показывает 1 затем 0
ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); //0*/