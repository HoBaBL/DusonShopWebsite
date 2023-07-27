const showMore = document.querySelector('.show-more');
const productsLenght = document.querySelectorAll('.magazin__li').length;
let items = 6;


showMore.addEventListener('click', () => {
    items += 3; /*сколько товара добавить надо*/
    const arrey = Array.from(document.querySelector('.magasin__ul').children);
    const visItems = arrey.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'))

    if (visItems.length === productsLenght) {
        showMore.style.display = 'none';
    }
})











