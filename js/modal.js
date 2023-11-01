  'use strict';

/////////////////// модалка для кнопки здесь
const modalImg1Add = document.querySelector('.modal-img1__add'), //модалка
addImg1Ad = document.querySelector('.img1__ad');	//кнопка

addImg1Ad.addEventListener('click', () => {
  modalImg1Add.classList.remove('hide');
});

modalImg1Add.addEventListener('click', (event) => {
  const target = event.target;

  if(target.classList.contains('modal__close') ||  target === modalImg1Add)
    modalImg1Add.classList.add('hide');
});

/////////////////// слайдер для кнопки здесь
new Swiper('.v-slider_education1',{
  mousewheel: true,
  navigation: {
    prevEl: '.swiper-button-prev', 
    nextEl: '.swiper-button-next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  slideToClickedSlide: true,
  slidesPerView: 1,
  watchOverflow: true,
  slidesPerGroup: 1,
  speed: 800,
  direction: 'vertical',
  breakpoints: {
    1024: {
      freeMode: false,
     },
     768: {
      freeMode: true,
      slidesPerView: 1,
     },
     480: {
      freeMode: true,
    },
    360: {
      freeMode: true,
      slidesPerView: 2,
     }
   },
});

/////////////////// модалка для кнопки тут
const modalImg2Add = document.querySelector('.modal-img2__add'), //модалка
addImg2Ad = document.querySelector('.img2__ad');	//кнопка

addImg2Ad.addEventListener('click', () => {
  modalImg2Add.classList.remove('hide');
});

modalImg2Add.addEventListener('click', (event) => {
  const target = event.target;

  if(target.classList.contains('modal__close') ||  target === modalImg2Add)
    modalImg2Add.classList.add('hide');
});

/////////////////// слайдер для кнопки тут
new Swiper('.v-slider_education2',{
  mousewheel: true,
  navigation: {
    prevEl: '.swiper-button-prev', 
    nextEl: '.swiper-button-next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  slideToClickedSlide: true,
  slidesPerView: 1,
  watchOverflow: true,
  slidesPerGroup: 1,
  speed: 800,
  direction: 'vertical',
  breakpoints: {
    1024: {
      freeMode: false,
     },
     768: {
      freeMode: true,
      slidesPerView: 1,
     },
     480: {
      freeMode: true,
    },
    360: {
      freeMode: true,
      slidesPerView: 2,
     }
   },
});