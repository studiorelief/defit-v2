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
      spaceBetween: 1.875 * 16,
      speed: 2000,
      autoplay: {
        delay: 0,
        pauseOnMouseEnter: true,
        // disableOnInteraction: false,
      },
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 6,
        },
        992: {
          slidesPerView: 8,
        },
      },
    });
  });
}
