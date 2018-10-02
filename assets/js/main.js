var cartCounter = 0;
var cartPrice = 0;
var cartCounterLabel = document.getElementById('cart-counter');
var buttonsContainer = document.querySelector('.page-content');


var fnPriceCounter = function (elem) {
  let tempPrice = elem.parentElement.previousElementSibling.innerHTML;
  cartPrice += +tempPrice.replace(/^\$(\d+)\s\D+(\d+).*$/g, '$1.$2');
  buttonsContainer.removeEventListener('click', btnClickHandler);
  return 'Added ' + cartPrice.toFixed(2) + ' $';
};

var fnRestore = function (elem, restore) {
  elem.innerHTML = restore;
  elem.disabled = false;   // деактивации кнопки - альтернатива снятию события
  buttonsContainer.addEventListener('click', btnClickHandler);
};

var btnClickHandler = function (e) {
  var target = e.target;

  if (target.classList.contains('item-actions__cart')) {

    cartCounterLabel.innerHTML = ++cartCounter;

    if (cartCounter === 1) {
      cartCounterLabel.style.display = 'block'
    }

    target.disabled = true;  // деактивации кнопки - альтернатива снятию события

    let tempButton = target;
    let restoreHTML = target.innerHTML;

    target.innerHTML = fnPriceCounter(target);

    setTimeout(fnRestore, 2000, tempButton, restoreHTML);
  }
};

buttonsContainer.addEventListener('click', btnClickHandler);
