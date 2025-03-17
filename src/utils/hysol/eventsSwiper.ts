import 'swiper/css';

import { Swiper } from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';

export function swiperHysolEvents() {
  const swiperContainers = document.querySelectorAll('.swiper.is-hysol-events');

  swiperContainers.forEach((container) => {
    new Swiper(container as HTMLElement, {
      modules: [Autoplay, Mousewheel],
      direction: 'horizontal',
      centeredSlides: true,
      loop: true,
      speed: 500,
      // autoplay: {
      //   delay: 2000,
      //   pauseOnMouseEnter: true,
      // },
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 0.5 * 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0.5 * 16,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 1.875 * 16,
        },
      },
    });
  });
}
