let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert("Item added to cart!");
}
function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const cat = product.getAttribute('data-category');
    if (category === 'all' || category === cat) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

