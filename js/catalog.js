
var buyButtons = document.querySelectorAll(".card-button-buy");
var modalBasket = document.querySelector(".modal-add-to-basket");
var closeModalBasket = modalBasket.querySelector(".button-close");


closeModalBasket.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalBasket.classList.add("visually-hidden");
});


for (var index = 0; index < buyButtons.length; index++) {
    var button = buyButtons[index];
    button.addEventListener("click", function(evt) {
        evt.preventDefault();
        modalBasket.classList.remove("visually-hidden");   
    } 
    
    );
}
