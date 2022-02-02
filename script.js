let quantity = 1
let productsInCart = 0;
let price = 250.0
let discount = 0.5;

const counter = document.querySelector(".counter");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const cart = document.querySelector(".cart-nav");
const cartCheckout = document.querySelector(".cart");
const addItem = document.querySelector(".add-item");
const cartCount = document.querySelector('.cart-count');
const productInShoppingCart = document.querySelector('.products-in-cart');

const msgEmpty = document.querySelector('.msg-empty');
const checkout = document.querySelector('.checkout');

btnPlus.addEventListener('click', plusOne);
btnMinus.addEventListener('click', removeOne);
cart.addEventListener('click', showCart);
addItem.addEventListener('click', addToCart);

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

function addToCart() {
    productsInCart += quantity;

    const productHTMLElement = `
    <div class="item">
        <img class="product-img" src="./images/image-product-1-thumbnail.jpg" alt="product 1 thumb">
        <div class="details">
            <div class="product-name">Fall Limited Edition...</div>
            <div class="price-group">
                <div class="price">$${(price*discount).toFixed(2)}</div> x
                <div class="count">${productsInCart}</div>
                <div class="total-amount">$${(price*discount*productsInCart).toFixed(2)}</div>
        </div>
        </div>
        <img id="btnDelete" src="./images/icon-delete.svg" alt="icon delete">
    </div>
    `;

    productInShoppingCart.innerHTML = productHTMLElement;

    updateCart();

    const btnDelete = document.querySelector('#btnDelete');
    btnDelete.addEventListener('click', onBtnDeleteClick);
    //console.log(productsInCart);
}

function updateCart() {
    updateCartIcon();
    updateMsgEmpty();
    updateCheckoutButton();
}

function updateCartIcon() {
    cartCount.textContent = productsInCart;
    if (productsInCart == 0) {
        if (!cartCount.classList.contains('hidden')) {
            cartCount.classList.add('hidden');
        }
    } else {
        cartCount.classList.remove('hidden');
    }
}

function updateMsgEmpty() {
    if (productsInCart == 0) {
        if (msgEmpty.classList.contains('hidden')) {
            msgEmpty.classList.remove('hidden');
        }
    } else {
        if (!msgEmpty.classList.contains('hidden')){
            msgEmpty.classList.add('hidden');
        }
    }

}

function updateCheckoutButton() {
    if (productsInCart == 0) {
        if (!checkout.classList.contains('hidden')) {
            checkout.classList.add('hidden');
        }
    } else {
        checkout.classList.remove('hidden');
    }
}

function onBtnDeleteClick() {
    productsInCart--;
    updateCart();

    const el = document.querySelector('.count');
    const totalAmount = document.querySelector('.total-amount');
    el.innerHTML = productsInCart;
    totalAmount.innerHTML = `$${(price*discount*productsInCart).toFixed(2)}`;

    if (productsInCart == 0) {
        productInShoppingCart.innerHTML = '';
    }
}