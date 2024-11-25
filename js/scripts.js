const rootStyles = document.documentElement.style;
const confirmOrderElement = document.getElementById('confirm-modal');
const modalElement = document.getElementById('modal');
const newOrderElement = document.getElementById('hide-modal');
const allAddToCartElements = document.querySelectorAll('.add-to-cart');
const allIncreaseElements = document.querySelectorAll('.increase');
const allDecreaseElements = document.querySelectorAll('.decrease');
const toAppendInCartElement = document.getElementById('to-add-in-cart');
const emptyCartElement = document.getElementById('empty-cart');

//abrir compra final
const showModal = (event) => {
  modalElement.classList.remove('hide-modal');
};
confirmOrderElement.addEventListener('click', showModal);

//volver a la pantalla de compra
const hideModal = (event) => {
  modalElement.classList.add('hide-modal');
};
newOrderElement.addEventListener('click', hideModal);

//mostrar botones de cantidad
const showBuyQuantity = (event) => {
  event.target.nextElementSibling.classList.remove('remove-hidden-add-to-cart');
  event.target.nextElementSibling.children[1].textContent = 0;
};
allAddToCartElements.forEach((addToCart) => {
  addToCart.addEventListener('click', showBuyQuantity);
});

//aumentar cantidad
//añadir al carro
let itemCount = [];
const increaseAmount = (event) => {
  event.target.previousElementSibling.textContent =
    Number(event.target.previousElementSibling.textContent) + 1;
  emptyCartElement.classList.add('empty-cart-hidden');
  itemCount.push(1);
  if (itemCount.length === 1) {
    const fragment = document.createDocumentFragment();
    const itemOrderedAndPrice = document.createElement('div');
    itemOrderedAndPrice.classList.add('item-ordered-and-prices');
    itemOrderedAndPrice.dataset.dish =
      event.target.parentElement.parentElement.nextElementSibling.children[1].dataset.dish;
    const unitaryItem = document.createElement('div');
    unitaryItem.classList.add('unitary-item');
    const itemOrderedTitle = document.createElement('span');
    itemOrderedTitle.classList.add('item-ordered-title');
    itemOrderedTitle.textContent =
      event.target.parentElement.parentElement.nextElementSibling.children[1].textContent;
    const amountAndPrice = document.createElement('div');
    amountAndPrice.classList.add('amount-and-price');
    const amount = document.createElement('span');
    amount.classList.add('amount');
    amount.textContent = event.target.previousElementSibling.textContent + 'x';
    const unitaryPrice = document.createElement('span');
    unitaryPrice.classList.add('unitary-price');
    unitaryPrice.textContent =
      '@$' +
      event.target.parentElement.parentElement.nextElementSibling.children[2]
        .children[0].dataset.singleprice;
    const itemCountPrice = document.createElement('span');
    itemCountPrice.classList.add('price-per-product');
    itemCountPrice.textContent =
      '$' +
      event.target.parentElement.parentElement.nextElementSibling.children[2]
        .children[0].dataset.singleprice *
        Number(event.target.previousElementSibling.textContent);
    const deleteItem = document.createElement('div');
    deleteItem.classList.add('delete-cart');
    amountAndPrice.append(amount, unitaryPrice, itemCountPrice);
    unitaryItem.append(itemOrderedTitle, amountAndPrice);
    itemOrderedAndPrice.append(unitaryItem, deleteItem);
    fragment.append(itemOrderedAndPrice);
    toAppendInCartElement.append(fragment);
  } else if (itemCount.length > 1) {
    console.dir(toAppendInCartElement.children); //(
    //      event.target.parentElement.parentElement.nextElementSibling.children[1]
    //        .dataset.dish
    //    ).children[0].children[1].children[0].textContent = itemCount.length;
  }
};
allIncreaseElements.forEach((increaseElement) => {
  increaseElement.addEventListener('click', increaseAmount);
});

//disminuir cantidad

const decreaseAmount = (event) => {
  event.target.nextElementSibling.textContent =
    Number(event.target.nextElementSibling.textContent) - 1;
  if (Number(event.target.nextElementSibling.textContent) <= 0) {
    event.target.parentElement.classList.add('remove-hidden-add-to-cart');
  }
  itemCount.pop();
  console.log(itemCount);
};
allDecreaseElements.forEach((decreaseElement) => {
  decreaseElement.addEventListener('click', decreaseAmount);
});
