
    var contactsButton = document.querySelector(".contacts-button");
    var modalContactUs = document.querySelector(".modal-contact-us");
    var closePopupContact = modalContactUs.querySelector(".button-close");

    contactsButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      modalContactUs.classList.remove('visually-hidden');
    
    });

    closePopupContact.addEventListener('click', function(evt) {
      evt.preventDefault();
      modalContactUs.classList.add('visually-hidden');
  });


    var mapButton = document.querySelector(".contacts-map-link");
    var modalLocation = document.querySelector(".modal-our-location");
    var closePopupLocation = modalLocation.querySelector(".button-close");

    mapButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      modalLocation.classList.remove('visually-hidden');
    
    });

    closePopupLocation.addEventListener('click', function(evt) {
      evt.preventDefault();
      modalLocation.classList.add('visually-hidden');
  });
    

