Notiflix.Loading.pulse("Fetching Data...");
setTimeout(() => {
  $("div").removeClass("cont1");
  Notiflix.Loading.remove();
  $(".ui.accordion").accordion();
  $(".ui.embed").embed();

  const galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 5,
    centeredSlides: true,
    loop: false,
    direction: "horizontal",
    effect: "slide",
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
  const swiper3 = new Swiper("#swiper3", {
    direction: "horizontal",
    loop: true,
    effect: "slide",
    thumbs: {
      swiper: galleryThumbs,
    },
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    grabCursor: true,
    setWrapperSize: true,

    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
      },
      690: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 100,
      },
    },
  });
  const swiper2 = new Swiper("#swiper2", {
    direction: "horizontal",

    effect: "slide",

    slidesPerView: 1.1,
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    setWrapperSize: true,

    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 10,
      },
      690: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 40,
      },
    },
  });
  const swiper1 = new Swiper("#swiper1", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    direction: "horizontal",
    loop: true,
    effect: "slide",

    slidesPerView: 1.1,
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    setWrapperSize: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 40,
      },
      690: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 40,
      },
    },
  });
  const swiper = new Swiper(".gallery-top", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    direction: "horizontal",
    loop: true,
    effect: "slide",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1.1,
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    setWrapperSize: true,

    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 80,
      },
      690: {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 40,
      },
    },
  });
  $("#slideshow1").slick({
    draggable: true,
    arrows: true,
    nextArrow: document.getElementById("nextslider"),
    prevArrow: document.getElementById("prevslider"),
    fade: true,
    speed: 900,

    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    touchThreshold: 100,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  $("#slideshow2").slick({
    draggable: true,

    arrows: true,
    nextArrow: document.getElementById("nextslider1"),
    prevArrow: document.getElementById("prevslider1"),

    speed: 900,

    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    touchThreshold: 100,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#slideshow3").slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    arrows: true,
    nextArrow: document.getElementById("nextslider2"),
    prevArrow: document.getElementById("prevslider2"),
    speed: 900,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    touchThreshold: 100,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,

    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#swiper2 .image1").dimmer({
    on: "hover",
  });
  $(".fadee").transition("fade up in");
}, 7000);
