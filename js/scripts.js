const rootStyles = document.documentElement.style;
const confirmOrderElement = document.getElementById('confirm-modal');
const modalElement = document.getElementById('modal');
const newOrderElement = document.getElementById('hide-modal');
const productsElement = document.getElementById('products');
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

//añadir al carro

let cartContent = [];

// const addProductToCart = (event) => {
//   const fragment = document.createDocumentFragment();
//   const itemOrderedAndPrice = document.createElement('div');
//   itemOrderedAndPrice.classList.add('item-ordered-and-prices');
//   const unitaryItem = document.createElement('div');
//   unitaryItem.classList.add('unitary-item');
//   const itemOrderedTitle = document.createElement('span');
//   itemOrderedTitle.classList.add('item-ordered-title');
//   itemOrderedTitle.textContent = event.target.dataset.name;
//   const amountAndPrice = document.createElement('div');
//   amountAndPrice.classList.add('amount-and-price');
//   const amount = document.createElement('span');
//   amount.classList.add('amount');
//   amount.textContent = '1x';
//   const unitaryPrice = document.createElement('span');
//   unitaryPrice.classList.add('unitary-price');
//   unitaryPrice.textContent = '@$' + event.target.dataset.price;
//   const itemCountPrice = document.createElement('span');
//   itemCountPrice.classList.add('price-per-product');
//   itemCountPrice.textContent = '$' + event.target.dataset.price;
//   const deleteItem = document.createElement('div');
//   deleteItem.classList.add('delete-cart');
//   amountAndPrice.append(amount, unitaryPrice, itemCountPrice);
//   unitaryItem.append(itemOrderedTitle, amountAndPrice);
//   itemOrderedAndPrice.append(unitaryItem, deleteItem);
//   fragment.append(itemOrderedAndPrice);
//   toAppendInCartElement.append(fragment);
// };

//aumentar cantidad

// let toUpdateCart = [];

// const increaseAmount = (event) => {
//   toUpdateCart.forEach((element) => {
//     if (event.target.dataset.name === element.name) {
//       element.quantity += 1;
//     }
//   });
// };
// allIncreaseElements.forEach((increaseElement) => {
//   increaseElement.addEventListener('click', increaseAmount);
// });

//mostrar botones de cantidad y añadir al carro
// const showBuyQuantity = (event) => {
//   event.target.nextElementSibling.classList.remove('remove-hidden-add-to-cart');
//   event.target.nextElementSibling.children[1].textContent = 1;
//   //addProductToCart(event);
//   emptyCartElement.classList.add('empty-cart-hidden');
//   let cartItem = {
//     name: event.target.dataset.name,
//     price: event.target.dataset.price,
//     quantity: 0,
//   };
//   toUpdateCart.push(cartItem);
//   console.log(toUpdateCart);
// };
// allAddToCartElements.forEach((addToCart) => {
//   addToCart.addEventListener('click', showBuyQuantity);
// });

// //disminuir cantidad

// const decreaseAmount = (event) => {
//   event.target.nextElementSibling.textContent =
//     Number(event.target.nextElementSibling.textContent) - 1;
//   if (Number(event.target.nextElementSibling.textContent) <= 0) {
//     event.target.parentElement.classList.add('remove-hidden-add-to-cart');
//   }
//   itemCount.pop();
//   console.log(itemCount);
// };
// allDecreaseElements.forEach((decreaseElement) => {
//   decreaseElement.addEventListener('click', decreaseAmount);
// });
