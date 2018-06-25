var cartCounter = 0;
var cartPrice = 0;
var cartCounterLabel = document.getElementById('cart-counter');
var items = document.querySelector('.page-content');


var fnPriceCounter = function (elem) {
  var tempPrice = elem.parentElement.previousElementSibling.innerHTML;
  // регулярка, продвинутый вариант
  tempPrice = tempPrice.replace(/^\$(\d+)\s\D+(\d+).*$/g, '$1.$2');
  // простейший вариант через цепочку вызовов replace
  // tempPrice = tempPrice.replace('$','').replace(' <sup>','.').replace('</sup>','');
  cartPrice += +tempPrice;
  return 'Added ' + cartPrice.toFixed(2) + ' $';
};

var fnRestore = function (elem, restore) {
  elem.innerHTML = restore;
  // вариант деактивации кнопки, альтернатива снятию события
  // решение может работать самостоятельно, снятие и добавление события - не нужны
  elem.disabled = false;
  items.addEventListener('click', fnCounter);
};

var fnCounter = function (e) {
  var target = e.target;

  if (target.classList.contains('item-actions__cart')) {

    cartCounter++;
    cartCounterLabel.innerHTML = cartCounter;

    if (cartCounter === 1) {
      cartCounterLabel.style.display = 'block'
    }

    // вариант деактивации кнопки, альтернатива снятию события
    // решение может работать самостоятельно, снятие и добавление события - не нужны
    target.disabled = true;

    var tempButton = target;
    var restoreHTML = target.innerHTML;

    target.innerHTML = fnPriceCounter(target);

    items.removeEventListener('click', fnCounter);

    setTimeout(fnRestore, 2000, tempButton, restoreHTML);
    // сокращаем
    // более очевидный, но длинный вариант
    // setTimeout(function() {
    //   fnRestore(tempButton, restoreHTML);
    // }, 2000);
  }
};

// назначение обработчика через родителя
items.addEventListener('click', fnCounter);
// самое простое решение - обработчик на кнопках
// for(var i=addToCart.length; i--;){
//   addToCart[i].addEventListener('click', fnCounter);
// }
