const swiper = new Swiper(".container1", {
    // Optional parameters
    // direction: "vertical",
    // loop: true,
    // autoplay: {
    //     delay: 2000,
    // },
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    // If we need pagination
    pagination: {
        el: ".pagination1",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".scroll1",
    },
    speed: 4000
});





var swiper2 = new Swiper('.container2', {
    slidesPerView: 3,
    spaceBetween: 40,
    // loop: true,
    // clickable: true,
    // autoplay: {
    //     delay: 2000,
    // },
    freeMode: true,
    pagination: {
      el: '.pagination2',
      clickable: true,
    },
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
  },

  // And if we need scrollbar
  scrollbar: {
      el: ".scroll2",
  }
  });