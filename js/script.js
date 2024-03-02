"use strict";

const result = (confirm("ЭТОТ САЙТ СТАВИТ ВАМ МАЙНЕР НА КОМП АХАХАХ"));
console.log(result);

const answers = [];
answers[0] = prompt("Как Вас зовут?", "");
answers[1] = prompt("Какой у Вас никнейм?", "");
answers[2] = +prompt("Сколько Вам лет?", "");

if (answers[2] < 18 || answers[2] == null || answers[2] == "") {
    alert( "Иди нахуй, школотрон! АХАХАХАХ");
    close();
}

else {
    alert(`Добро пожаловать, ${answers[0]}!`);
    const numberOfGames = +prompt("Сколько игр за последнее время Вы прошли полностью?", "");

    const personalGameDB = {
        count : numberOfGames,
        games : {},
        developer : {},
        genres : [],
        privat : false
    };

    if (numberOfGames != 0){

        for (let i = 1; i <= numberOfGames; i++){
            const game = prompt("Назовите одну из последних пройденных видеоигр:", ""),
                  rate = +prompt("На сколько вы её оцените по 10-ти бальной шкале?", "");
            if (rate != null && rate != "" && rate <= 10 && game != null && game != "" && game.length < 51){
                personalGameDB.games[game] = rate;
            }
            else{
                i--;
            }
        }
    }

    console.log(personalGameDB);
}
