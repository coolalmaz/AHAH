"use strict";

//const result = (confirm("Are you here?"));
//console.log(result);

/*const answer = +prompt("How old are you?", "18"); //+ перед prompt для того чтобы тип данных был числом, а не строкой
console.log(answer);*/

const answers = [];
answers[0] = prompt("Как Вас зовут?", "");
answers[1] = prompt("Какой у Вас никнейм?", "");
answers[2] = +prompt("Сколько Вам лет?", "");



if (answers[2] < 18) {
    alert( "Иди нахуй, школотрон! АХАХАХАХ");
    close();
}
else 
    alert(`Добро пожаловать, ${answers[0]}!`);
