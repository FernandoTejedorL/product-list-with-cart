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
const totalQuantityElement = document.getElementById('total-quantity');
const totalAmountElement = document.getElementById('total-amount');
const toAppendInOrderElement = document.getElementById('to-add-in-order');
const finalPriceElement = document.getElementById('final-price');

//añadir al carro

let cartContent = [];

const insertInCart = (event) => {
  event.target.nextElementSibling.classList.remove('remove-hidden-add-to-cart');
  const cartItem = {
    name: event.target.dataset.name,
    price: event.target.dataset.price,
    quantity: 1,
  };
  cartContent.push(cartItem);
  return cartContent;
};

//incrementar cantidad y editar contador

const incrementQuantity = (event) => {
  let newQuantity = 0;
  const name = event.target.dataset.name;
  cartContent = cartContent.map((product) => {
    if (product.name === name) {
      product.quantity++;
    }
    newQuantity = product.quantity;
    event.target.previousElementSibling.textContent = newQuantity;
    return product;
  });
  return cartContent;
};

//Eliminar del carro

const removeFromCart = (name) => {
  cartContent = cartContent.filter((product) => product.name !== name);
};

// Disminuir cantidad

const decrementQuantity = (event) => {
  let newQuantity = 0;
  const name = event.target.dataset.name;
  cartContent = cartContent.map((product) => {
    if (product.name === name) {
      product.quantity--;
      newQuantity = product.quantity;
      event.target.nextElementSibling.textContent = newQuantity;
    }
    if (product.quantity === 0) {
      event.target.parentElement.classList.add('remove-hidden-add-to-cart');
      event.target.nextElementSibling.textContent = newQuantity + 1;
    }
    return product;
  });
  cartContent = cartContent.filter((element) => {
    return element.quantity !== 0;
  });
  return cartContent;
};

//actualizar el total de cantidades para el carrito

const updateTotal = () => {
  const totalUpdated = cartContent.reduce(
    (acc, product) => product.quantity + acc,
    0
  );
  totalQuantityElement.textContent = totalUpdated;
};

//actualizar la pasta total para el carrito y el modal

const updateTotalAmount = () => {
  const totalAmountUpdated = cartContent.reduce(
    (acc, product) => product.quantity * product.price + acc,
    0
  );
  totalAmountElement.textContent = totalAmountUpdated;
  finalPriceElement.textContent = totalAmountUpdated;
};

//pintar en el carrito

const printContent = (array) => {
  cartContent.forEach((product) => {
    const fragment = document.createDocumentFragment();
    const itemOrderedAndPrice = document.createElement('div');
    itemOrderedAndPrice.classList.add('item-ordered-and-prices');
    const unitaryItem = document.createElement('div');
    unitaryItem.classList.add('unitary-item');
    const itemOrderedTitle = document.createElement('span');
    itemOrderedTitle.classList.add('item-ordered-title');
    itemOrderedTitle.textContent = product.name;
    const amountAndPrice = document.createElement('div');
    amountAndPrice.classList.add('amount-and-price');
    const amount = document.createElement('span');
    amount.classList.add('amount');
    amount.textContent = product.quantity + 'x';
    const unitaryPrice = document.createElement('span');
    unitaryPrice.classList.add('unitary-price');
    unitaryPrice.textContent = '@$' + product.price;
    const itemCountPrice = document.createElement('span');
    itemCountPrice.classList.add('price-per-product');
    itemCountPrice.textContent = '$' + product.price * product.quantity;
    const deleteItem = document.createElement('div');
    deleteItem.classList.add('delete-cart');
    amountAndPrice.append(amount, unitaryPrice, itemCountPrice);
    unitaryItem.append(itemOrderedTitle, amountAndPrice);
    itemOrderedAndPrice.append(unitaryItem, deleteItem);
    fragment.append(itemOrderedAndPrice);
    toAppendInCartElement.append(fragment);
  });
};

//pintar en el modal

const printContentInOrder = (array) => {
  cartContent.forEach((product) => {
    const fragment = document.createDocumentFragment();
    const itemOrderedAndPrice = document.createElement('div');
    itemOrderedAndPrice.classList.add('item-ordered-and-prices');
    const unitaryItem = document.createElement('div');
    unitaryItem.classList.add('unitary-item');
    const itemOrderedTitle = document.createElement('span');
    itemOrderedTitle.classList.add('item-ordered-title');
    itemOrderedTitle.textContent = product.name;
    const amountAndPrice = document.createElement('div');
    amountAndPrice.classList.add('amount-and-price');
    const amount = document.createElement('span');
    amount.classList.add('amount');
    amount.textContent = product.quantity + 'x';
    const unitaryPrice = document.createElement('span');
    unitaryPrice.classList.add('unitary-price');
    unitaryPrice.textContent = '@$' + product.price;
    const itemCountPrice = document.createElement('span');
    itemCountPrice.classList.add('price-per-product');
    itemCountPrice.textContent = '$' + product.price * product.quantity;
    const deleteItem = document.createElement('div');
    deleteItem.classList.add('delete-cart');
    amountAndPrice.append(amount, unitaryPrice, itemCountPrice);
    unitaryItem.append(itemOrderedTitle, amountAndPrice);
    itemOrderedAndPrice.append(unitaryItem, deleteItem);
    fragment.append(itemOrderedAndPrice);
    toAppendInOrderElement.append(fragment);
  });
};

//Función para añadir

const mainClick = (event) => {
  const type = event.target.dataset.type;
  if (!type) return;
  if (type === 'button') {
    insertInCart(event);
  }
  if (type === 'increase') {
    incrementQuantity(event);
  }
  if (type === 'decrease') {
    decrementQuantity(event);
  }
  updateTotal(cartContent);
  updateTotalAmount(cartContent);
  if (cartContent.length === 0) {
    emptyCartElement.classList.remove('empty-cart-hidden');
  } else {
    emptyCartElement.classList.add('empty-cart-hidden');
  }
  toAppendInCartElement.innerHTML = '';
  printContent(cartContent);
  toAppendInOrderElement.innerHTML = '';
  printContentInOrder(cartContent);
};

productsElement.addEventListener('click', mainClick);

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
