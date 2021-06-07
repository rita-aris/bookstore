$(document).ready(function () {
  const genreSwiper = new Swiper(".genre-slider", {
    // Optional parameters
    loop: false,
    slidesPerView: 4,
    spaceBetween: 26,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".genre__button--next",
      prevEl: ".genre__button--prev",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 26,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 26,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 26,
      },
      992: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 26,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 26,
      },
    },
  });

  const unreleasedSwiper = new Swiper(".unreleased-slider", {
    // Optional parameters
    loop: false,
    slidesPerView: 5,
    spaceBetween: 30,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".unreleased__button--next",
      prevEl: ".unreleased__button--prev",
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  $(".modal__overlay").on("click", closeModal);
  document.addEventListener("keyup", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $("body").css("overflow", "hidden");
  }

  function closeModal(event) {
    $("body").css("overflow", "auto");
    if (event.key === "Escape" || event.type === "click") {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
    event.preventDefault();
  }

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите ваше имя",
          minlength: "Имя должно содержать больше 2 букв",
        },
        email: {
          required: "Нам нужен ваш адрес",
          email: "Адрес должен быть в формате name@domain.com",
        },
        phone: {
          required: "Укажите ваш телефон",
          minlength: "Номер должен содержать 11 цифр",
        },
      },
    });
  });

  // Маски
  $(document).ready(function () {
    $(".phone-mask").mask("+7 (999) 999-99-99");
  });

  //Анимация
  AOS.init();
});
