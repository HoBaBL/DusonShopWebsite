const productsBtn = document.querySelectorAll('.magazin_button');
const cartProductList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.fullprice');
let price = 0;

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrise = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrise = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrise = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`
};

const printQuantity = () => {
    let length = cartProductList.querySelector('.simplebar-content').children.length;
    cartQuantity.textContent = length;
    length > 0 ? cart.classList.add('active') : cart.classList.remove('active');

};

function generateCartProduct(img, title, price, id) {
    return `
    <li class="cart-content__item">
        <article class="cart-content__product cart-product" data-id=${id}>
            <img src=${img} alt="" class="cart-product__img">
            <div class="cart-pruduct__text">
                <h3 class="cart-product__title">${title}</h3>
                <span class="cart-product__prise">${normalPrice(price)}</span>
            </div>
            <button class="cart-product__delete" aria-lebel="Удалить товар"></button>
        </article>
    </li>
	`;
}

function deleteProduct(productParent) {
    console.log(productParent);
    let id = productParent.querySelector('.cart-product').dataset.id;
    document.querySelector(`.product[data-id="${id}"]`).querySelector('.magazin_button').disabled = false;

    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__prise').textContent));
    minusFullPrise(currentPrice);
    printFullPrise();
    productParent.remove();

    printQuantity();
}

productsBtn.forEach(el => {
    el.closest('.product').setAttribute('data-id', randomId());
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.product');
        let id = parent.dataset.id;
        let img = parent.querySelector('.img-swith img').getAttribute('src');
        let title = parent.querySelector('.product__title').textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.magazin_prise').textContent));

        plusFullPrise(priceNumber)
        console.log(price);
        printFullPrise();
        cartProductList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
        printQuantity();

        self.disable = true;
    })
});


cartProductList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-product__delete')) {
        deleteProduct(e.target.closest('.cart-content__item'));
    }
});
