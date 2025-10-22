
const progressLine = document.querySelector('.autoplay-progress svg');


const mainSwiper = new Swiper(".main-swiper", {
  loop: true, 

  autoplay: {
    delay: 3500, 
    disableOnInteraction: false, 
  },

  // 페이지네이션
  pagination: {
    el: ".main-swiper .swiper-pagination",
    clickable: false, // 클릭 비활성화
    type: "custom",
    renderCustom: function (swiper, current, total) {
      // 현재/전체를 2자리 숫자로 표시 
      return `<span class="current">${current < 10 ? '0' + current : current}</span><span class="total">${total < 10 ? '0' + total : total}</span>`;
    }
  },

  
  navigation: {
    nextEl: ".main-swiper .swiper-button-next",
    prevEl: ".main-swiper .swiper-button-prev",
  },

  // SVG 진행 바 
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressLine.style.setProperty("--progress", 1 - progress);
    }
  }
});

//section_1 slide end

var swiper = new Swiper(".sec_2_swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },

  breakpoints: {
   480: {  
      slidesPerView: 2.5,
      spaceBetween: 15,
    },

  }

});

// section_2 slide end

var sec_3_swiper = new Swiper(".sec_3_swiper", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

// section_3 slide end

var sec_4_swiper = new Swiper(".sec_4_swiper", {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



