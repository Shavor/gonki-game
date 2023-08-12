'use strict'

let timer;// таймер
let cars; //массив машин
let cx;// массив координат
let gameBegin;
let totalSum = 0;

// let summ = prompt('Введите вашу сумму');
// let c = +prompt('На какую машину делаете ставку (от 0 до 4)');
// let stavka = +prompt('Сколько вы ставите на выйгрыш');

function go() {
    if(gameBegin==1) return;
    gameBegin == 1;
    cars = [];
    for(let i = 0; i < 5; i++) {
        cars[i] = document.querySelector('.car' + i);
        cars[i].style.border = 'none';
    }
    cx = [];
    for(let i = 0; i < 5; i++) {
        cx[i] = 680;
        console.log(cx[i]);
    }
    timer = setInterval(timeGo, 50);
}

function timeGo(){
    for(let i = 0; i < 5; i++){
        cx[i] = cx[i] - Math.floor(Math.random()*7 + 2);
        if(cx[i] <= 0) {
            clearInterval(timer);
            gameBegin == 0;
            if(i == c) {
                alert('Вы победили');
                summ += stavka;
            } else {
                alert(`Вы проиграли. Первым было машина ${i+1}`);
                alert('Ваша сумма ' + summ);
            }
            cars[i].style.border = '1px solid red';
            return;
        }
        cars[i].style.left = cx[i] + 'px';
    }
}