let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('.page-content');
let cartCounter = 0;
let cartPrice = 0;


let btnClickHandler = (event) =>{
   let  target = event.target;
   if(target.classList.contains('item-actions__cart')){
   cartCounterLabel.innerHTML = ++cartCounter;
   if(cartCounter === 1 )cartCounterLabel.style.display = 'block';

      // const mockData = target;
      // console.log(mockData)
   }
}

buttonsContainer.addEventListener('click', btnClickHandler);