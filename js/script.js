var cartCounter = 0;
var cartCounterLabel = document.getElementById('cart-counter');
var cartPrice = 0;
var addToCart = document.querySelectorAll('.item-actions__cart');

var fnPriceCounter = function (e) {
  var tempPrice = e.parentElement.previousElementSibling.innerHTML;
  tempPrice = tempPrice.replace('$','').replace(' <sup>','.').replace('</sup>','');
  cartPrice = cartPrice + Number(tempPrice);
  return cartPrice.toFixed(2);
};

var fnRestore = function (elem, restore) {
  elem.innerHTML = restore;
  elem.addEventListener('click', fnCounter);
};

var fnCounter = function() {
  cartCounter++;
  cartCounterLabel.innerHTML = cartCounter;

  if (cartCounter === 1) {
    cartCounterLabel.style.display = 'block'
  }

  var tempButton = this;
  var restoreHTML = this.innerHTML;
  this.innerHTML = 'Added ' + fnPriceCounter(this) + ' $';
  this.removeEventListener('click', fnCounter);

  setTimeout(fnRestore, 2000, tempButton, restoreHTML); // сокращаем
  // более очевидный, но длинный вариант
  // setTimeout(function() {
  //   fnRestore(tempButton, restoreHTML);
  // }, 2000);
};

for(var i=addToCart.length; i--;){
  addToCart[i].addEventListener('click', fnCounter);
}
