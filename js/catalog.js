
var buyButtons = document.querySelectorAll(".card-button-buy");
var modalBasket = document.querySelector(".modal-add-to-basket");
var closeModalBasket = modalBasket.querySelector(".button-close");


closeModalBasket.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalBasket.classList.add('visually-hidden');
});


buyButtons.forEach(button => {
    button.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalBasket.classList.remove('visually-hidden');   
    } 
    
    );
});