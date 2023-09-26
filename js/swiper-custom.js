let swiper = new Swiper(".main-slide", {
    spaceBetween: 20,
    autoplay: {
        delay: 3500
    },
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true,
    loop: true,

  });