const rootStyles = document.documentElement.style;
const confirmOrderElement = document.getElementById('confirm-modal');
const modalElement = document.getElementById('modal');
const newOrderElement = document.getElementById('hide-modal');
const allAddToCartElements = document.querySelectorAll('.add-to-cart');
const allIncreaseElements = document.querySelectorAll('.increase');
const allDecreaseElements = document.querySelectorAll('.decrease');

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
  console.dir(event.target);
  event.target.nextElementSibling.children[1].textContent = 0;
};
allAddToCartElements.forEach((addToCart) => {
  addToCart.addEventListener('click', showBuyQuantity);
});

//aumentar cantidad

const increaseAmount = (event) => {
  event.target.previousElementSibling.textContent =
    Number(event.target.previousElementSibling.textContent) + 1;
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
};
allDecreaseElements.forEach((decreaseElement) => {
  decreaseElement.addEventListener('click', decreaseAmount);
});

//añadir al carro
