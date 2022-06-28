'use strict';

let busketTotal = document.querySelector('.cartIconWrap span');

let busket={};

function incrProdBusket(){
    busketTotal.style.display = 'inline-block';
    busketTotal.textContent++;
}

function addProductInTheBusket(prodId){
    incrProdBusket();
    addProdObj(prodId);
    // renderProdInBusk(prodId);
}

function addProdObj(prodId) {
    if (!(prodId in busket)) {
        busket[prodId] = 1;
    } else {
        busket[prodId]++;
    }
}

let buttonBusket = document.querySelector('.cartIconWrap');
let busk=document.querySelector('.busket_active')

buttonBusket.addEventListener('click', function(){
    busk.classList.toggle('busket_active');
})