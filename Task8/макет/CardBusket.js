'use strict';

addButtonClickToBusket ()
function addButtonClickToBusket (){
    let buttons =document.querySelectorAll('button[id]');
    buttons.forEach(function (button) {
        button.addEventListener('click',clickHandler);
        
    });
}

function clickHandler(event){
    const prodId =event.currentTarget.getAttribute('id');
    addProductInTheBusket(prodId);

}

//button1
// let totalProd =document.querySelector('.totalProd span');
let button1 =document.getElementById('0');
let RowBusket = document.querySelector('.RowBusket');
button1.addEventListener('click', function () {
    // if(totalProd.style.display.none){
        addProduct(product1);
    // }else{
    //     totalProd.textContent++;
    // }
});

function addProduct(product1){
    let productRow = `<div class="result">
<div>${product1.name}</div>
<div class='totalProd'>
    <span >1</span> шт.
</div>
<div>$${product1.price}</div>
<div>
    $<span>${product1.price}</span>
</div>
</div>
`;
RowBusket.insertAdjacentHTML('afterend', productRow);
}

//button2
let button2 =document.getElementById('1');

button2.addEventListener('click', function () {
    // if(totalProd.style.display.none){
        addProduct(product2);
    // }else{
    //     totalProd.textContent++;
    // }
});

function addProduct(product2){
    let productRow = `<div class="result">
<div>${product2.name}</div>
<div class='totalProd'>
    <span >1</span> шт.
</div>
<div>$${product2.price}</div>
<div>
    $<span>${product2.price}</span>
</div>
</div>
`;
RowBusket.insertAdjacentHTML('afterend', productRow);
}

//button3
let button3 =document.getElementById('2');

button3.addEventListener('click', function () {
    // if(totalProd.style.display.none){
        addProduct(product3);
    // }else{
    //     totalProd.textContent++;
    // }
});

function addProduct(product3){
    let productRow = `<div class="result">
<div>${product3.name}</div>
<div class='totalProd'>
    <span >1</span> шт.
</div>
<div>$${product3.price}</div>
<div>
    $<span>${product3.price}</span>
</div>
</div>
`;
RowBusket.insertAdjacentHTML('afterend', productRow);
}

//button4
let button4 =document.getElementById('3');

button4.addEventListener('click', function () {
    // if(totalProd.style.display.none){
        addProduct(product4);
    // }else{
    //     totalProd.textContent++;
    // }
});

function addProduct(product4){
    let productRow = `<div class="result">
<div>${product4.name}</div>
<div class='totalProd'>
    <span >1</span> шт.
</div>
<div>$${product4.price}</div>
<div>
    $<span>${product4.price}</span>
</div>
</div>
`;
RowBusket.insertAdjacentHTML('afterend', productRow);
}

//button5
let button5 =document.getElementById('4');

button5.addEventListener('click', function () {
    // if(totalProd.style.display.none){
        addProduct(product5);
    // }else{
    //     totalProd.textContent++;
    // }
});

function addProduct(product5){
    let productRow = `<div class="result">
<div>${product5.name}</div>
<div class='totalProd'>
    <span >1</span> шт.
</div>
<div>$${product5.price}</div>
<div>
    $<span>${product5.price}</span>
</div>
</div>
`;
RowBusket.insertAdjacentHTML('afterend', productRow);
}

//button6
let button6 =document.getElementById('5');

button6.addEventListener('click', function () {
    // if(totalProd.style.display.none){
        addProduct(product6);
    // }else{
    //     totalProd.textContent++;
    // }
});

function addProduct(product6){
    let productRow = `<div class="result">
<div>${product6.name}</div>
<div class='totalProd'>
    <span >1</span> шт.
</div>
<div>$${product6.price}</div>
<div>
    $<span>${product6.price}</span>
</div>
</div>
`;
RowBusket.insertAdjacentHTML('afterend', productRow);
}