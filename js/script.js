var cartCounter = 0;
var cartCounterLabel = document.getElementById('cart-counter');
var addToCart = document.querySelectorAll('.item-actions__cart');

var fnCounter = function() {
  cartCounter++;
  cartCounterLabel.innerHTML = cartCounter;
  if (cartCounter === 1) {
    cartCounterLabel.style.display = 'block'
  }

  var tempButton = this;
  var restoreHTML = this.innerHTML; // простейшее исправление двойного клика
  // var restoreHTML = 'Add to cart <i class="fa fa-shopping-cart" aria-hidden="true"></i>';
  this.innerHTML = 'Added';
  setTimeout(function() {
    fnRestore(tempButton, restoreHTML);
  }, 1000); //как вариант - setTimeout(fnRestore, 1000, tempButton, restoreHTML);
};

function fnRestore(elem, restore) {
  elem.innerHTML = restore;
}

for(var i=0; i<addToCart.length; i++){
  addToCart[i].addEventListener('click', fnCounter);
}