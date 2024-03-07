"use strict";

const trolling = (confirm("ЭТОТ САЙТ СТАВИТ ВАМ МАЙНЕР НА КОМП АХАХАХ"));

const answers = [];
answers[0] = prompt("Как Вас зовут?", "");
answers[1] = prompt("Какой у Вас никнейм?", "");
answers[2] = +prompt("Сколько Вам лет?", "");

let numberOfGames;

function numberOfGamesAsker(){
    numberOfGames = +prompt("Сколько игр за последнее время Вы прошли полностью?", "");
    while ((numberOfGames == "" && isNaN(numberOfGames)) || isNaN(numberOfGames) || numberOfGames < 0){
        numberOfGames = +prompt("Сколько игр за последнее время Вы прошли полностью?", "");
    }
}

function rememberUsersGameRating(){
    for (let i = 1; i <= numberOfGames; i++){
        const game = prompt("Назовите одну из последних пройденных видеоигр:", ""),
              rate = +prompt("На сколько вы её оцените по 10-ти бальной шкале?", "");
        if (rate != "" && rate <= 10 && game != null && game != "" && game.length < 51){
            personalGameDB.games[game] = rate;
        }
        else{
            i--;
        }
    }
}

if (answers[2] < 18 || answers[2] == "" || isNaN(answers[2])) {
    alert( "Иди нахуй, школотрон! АХАХАХАХ");
    close();
}

else {
    alert(`Добро пожаловать, ${answers[0]}!`);

    numberOfGamesAsker();

    const personalGameDB = {
        count : numberOfGames,
        games : {},
        developer : {},
        genres : [],
        privat : false
    };

    if (numberOfGames != 0){
        rememberUsersGameRating()  
        }

    console.log(personalGameDB);
}
