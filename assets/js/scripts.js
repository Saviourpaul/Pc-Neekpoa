/**
 * Template Name: Myportfy
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 0
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  $(".navbar-toggler").click(function () {
    $(".header").toggleClass("header-bg");
  });

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    $(".header").removeClass("header-bg");
  });

  /**
   * Smooth scrolling with links
   */

  var sections = $("section"),
    nav = $("nav"),
    nav_height = nav.outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - 86,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });

  nav.find("a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    if (!id || id.charAt(0) !== "#" || !$(id).length) {
      return true;
    }

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height,
      },
      500
    );

    return false;
  });

  /**
   * clint logo slider
   */
  if (typeof Swiper !== "undefined" && document.querySelector(".clint-logo-slider")) {
    new Swiper(".clint-logo-slider", {
      loop: true,
      freeMode: true,
      spaceBetween: 30,
      grabCursor: true,
      slidesPerView: "2",
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      speed: 5000,
      freeModeMomentum: false,
      pagination: false,
      navigation: false,
      breakpoints: {
        768: {
          slidesPerView: 7,
        },
        576: {
          slidesPerView: 3,
        },
      },
    });
  }

  /**
   * expert-area-slider
   */

  if (typeof Swiper !== "undefined" && document.querySelector(".expert-area-slider")) {
    new Swiper(".expert-area-slider", {
      loop: true,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      slidesPerView: 1.1,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
      speed: 2000,
      spaceBetween: 20,

      breakpoints: {
        1600: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
  }

  /**
   * tab-slider
   */
  if ($(".slick-projects-slider").length) {
    $(".slick-projects-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      centerMode: true,
      centerPadding: "22%",
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            centerPadding: "10%",
          },
        },
        {
          breakpoint: 575,
          settings: {
            centerPadding: "10px",
          },
        },
      ],
    });
  }

  /**
   * Testimonial slider
   */

  if ($(".testimonial-slider-for").length && $(".testimonial-slider-nav").length) {
    $(".testimonial-slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: true,
      arrows: true,
      asNavFor: ".testimonial-slider-nav",
      dots: true,
      prevArrow: $(".testimonial-prev"),
      nextArrow: $(".testimonial-next"),
      appendDots: $(".slider-dots-box"),
      dotsClass: "slider-dots",
    });
    $(".testimonial-slider-nav").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: ".testimonial-slider-for",
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      centerPadding: "0px",
      infinite: true,
    });
  }

  
});
