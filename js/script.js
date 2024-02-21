"use strict";

const result = (confirm("ЭТОТ САЙТ СТАВИТ ВАМ МАЙНЕР НА КОМП АХАХАХ"));
console.log(result);

const answers = [];
answers[0] = prompt("Как Вас зовут?", "");
answers[1] = prompt("Какой у Вас никнейм?", "");
answers[2] = +prompt("Сколько Вам лет?", "");

if (answers[2] < 18) {
    alert( "Иди нахуй, школотрон! АХАХАХАХ");
    close();
}

else {
    alert(`Добро пожаловать, ${answers[0]}!`);
    const numberOfGames = +prompt("Сколько игр вы уже прошли?", "");

    const personalGameDB = {
        count : numberOfGames,
        games : {},
        developer : {},
        genres : [],
        privat : false
    };

    const game1 = prompt("Назовите одну из последних пройденных видеоигр:", ""),
        rate1 = prompt("На сколько вы её оцените по 10-ти бальной шкале?", ""),
        game2 = prompt("Назовите одну из последних пройденных видеоигр:", ""),
        rate2 = prompt("На сколько вы её оцените по 10-ти бальной шкале?", "");

    personalGameDB.games[game1] = rate1;
    personalGameDB.games[game2] = rate2;
    console.log(personalGameDB);
}