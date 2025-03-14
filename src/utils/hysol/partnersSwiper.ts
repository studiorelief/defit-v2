import 'swiper/css';

import { Swiper } from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';

export function swiperHysolPartners() {
  const swiperContainers = document.querySelectorAll('.swiper.is-hysol-partners');

  swiperContainers.forEach((container) => {
    new Swiper(container as HTMLElement, {
      modules: [Autoplay, Mousewheel],
      direction: 'horizontal',
      loop: true,
      slidesPerView: 8,
      spaceBetween: 1.875 * 16,
      speed: 500,
      autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true,
        // disableOnInteraction: false,
      },
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 8,
        },
      },
    });
  });
}
