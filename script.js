let quantity = 1
let counter = document.querySelector(".counter");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let cart = document.querySelector(".cart-nav");
let cartCheckout = document.querySelector(".cart");

btnPlus.addEventListener('click', plusOne);
btnMinus.addEventListener('click', removeOne);
cart.addEventListener('click', showCart);

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

function showCart() {
    cartCheckout.classList.toggle('hidden');
}