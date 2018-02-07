var cartCounter = 0;
var cartCounterLabel = document.getElementById('cart-counter');
var addToCart = document.querySelectorAll('.item-actions__cart');

var fnCounter = function() {
  cartCounter++;
  cartCounterLabel.innerHTML = cartCounter;
  if (cartCounter === 1) { cartCounterLabel.style.display = 'block' }
}

for(var i=0; i<addToCart.length; i++){
  addToCart[i].onclick = fnCounter;
}
