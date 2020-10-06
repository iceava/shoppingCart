let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('.page-content');
let cartCounter = 0;
let cartPrice = 0;


let btnClickHandler = (event) =>{
   let  target = event.target;
   if(target.classList.contains('item-actions__cart')){
   cartCounterLabel.innerHTML = ++cartCounter;
   if(cartCounter === 1 )cartCounterLabel.style.display = 'block';

      const mockData = +target.parentElement
      .previousElementSibling
      .innerHTML
      .replace(/^\$(\d+)\s\D+(\d+).*$/u,'$1.$2');
      // console.log(mockData);
      cartPrice = Math.round((cartPrice + mockData )* 100)/100;

      let restoreDetails = target.innerHTML;

      target.innerHTML = `Added ${cartPrice.toFixed(2)}$`;
      target.disabled = true;

      buttonsContainer.removeEventListener('click',btnClickHandler);

      setTimeout(() =>{
      target.innerHTML = restoreDetails;
      target.disabled = false;
      buttonsContainer.addEventListener('click', btnClickHandler);
      },888);
      console.log(cartPrice)
   }
};

buttonsContainer.addEventListener('click', btnClickHandler);