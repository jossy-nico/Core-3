//console.log("hola");
let botona = document.querySelector('#btn1');
let lik1 = document.querySelector('#likeboton1');
let botone = document.querySelector('#btn2');
let lik2 = document.querySelector('#likeboton2');
let botono = document.querySelector('#btn3');
let lik3 = document.querySelector('#likeboton3');

botona.addEventListener('click', function (evento){
    lik1.innerText = parseInt(lik1.innerText) + 1;
});

botone.addEventListener('click', function (evento){
    lik2.innerText = parseInt(lik2.innerText) + 1;
});

botono.addEventListener('click', function (evento){
    lik3.innerText = parseInt(lik3.innerText) + 1;
});