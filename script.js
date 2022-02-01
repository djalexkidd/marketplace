let quantity = 1
let counter = document.querySelector(".counter");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");

btnPlus.addEventListener('click', plusOne);
btnMinus.addEventListener('click', removeOne);

function plusOne() {
    quantity += 1;
    check();
}

function removeOne() {
    quantity -= 1;
    check();
}

function check() {
    if (quantity < 1) {
        quantity = 1;
    }
    else {
        counter.innerHTML = quantity;
    }
}