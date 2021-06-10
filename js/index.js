// ITERATION 1
function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  let valuePrice = parseFloat(price.innerText);
  let newSubtotal = Number(valuePrice) * quantity;

  subtotal.innerText = newSubtotal;

  return newSubtotal;
}

function calculateAll() { 
  const products = document.getElementsByClassName ('product');
  let value = 0;
  
  let allProducts = document.querySelectorAll(`.product`);

  

  allProducts.forEach((product) => {
    updateSubtotal(product);
    value += parseFloat(product.querySelector('.subtotal span').innerHTML);
    return value;
  });
  
}
// ITERATION 3

let total = document.querySelector('#total-value span');
  total.innerText = sum;
  console.log(total);


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
    const parent = target.parentNode;
    const grandParent = parent.parentNode;
    const greatGrandP
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
