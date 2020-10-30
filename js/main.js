$(document).ready(function () {
  var mySwiper = new Swiper(".hotel__slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(" .navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter your name!",
          minlength: "The name must be at least 2 letters long",
        },
        email: {
          required: "Enter your email address!",
          email: "Enter correct email address",
        },
        phone: {
          required: "Enter your phone number!",
          minlength: "Enter correct phone number",
        },
      },
    });
  });

  $(".subscribe").validate({
    errorClass: "novalid",
    messages: {
      email: {
        required: "Enter your email address!",
        email: "Enter correct email address",
      },
    },
  });

  $(function () {
    //2. Получить элемент, к которому необходимо добавить маску
    $(".phone").mask("+7(999) 999-9999");
    AOS.init();
  });
  $(function () {
    //2. Получить элемент, к которому необходимо добавить маску
    $(".phone1").mask("+7(999) 999-9999");
    AOS.init();
  });
});
