const addToBasketButtons = document.querySelectorAll('.basket');

let basket = [];

addToBasketButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const box = document.querySelectorAll('.box-1, .box-2, .box-3, .box-4, .box-5, .box-6, .box-7, .box-8')[index];
    const productName = box.querySelector('.prd-name').textContent;
    const productPrice = box.querySelector('.price span').textContent;

    const product = {
      name: productName,
      price: productPrice,
    };
    basket.push(product);
    updateBasketDisplay();
    console.log('Added Product:', product);

    saveBasketToLocalStorage();
  });
});

function updateBasketDisplay() {
  const basketDisplay = document.getElementById('basket-display');

  if (basketDisplay) {
    basketDisplay.innerHTML = '';
    basket.forEach((product) => {
      const productItem = document.createElement('div');
      productItem.textContent = `${product.name} - ${product.price}`;
      basketDisplay.appendChild(productItem);
    });
  }
}
function saveBasketToLocalStorage() {
  localStorage.setItem('basket', JSON.stringify(basket));
}

function loadBasketFromLocalStorage() {
  const storedBasket = localStorage.getItem('basket');
  if (storedBasket) {
    basket = JSON.parse(storedBasket);
    updateBasketDisplay();
  }
}
loadBasketFromLocalStorage();
