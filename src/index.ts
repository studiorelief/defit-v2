import './index.css';

import { svgComponent } from '$utils/global/tricks';
import { swiperHysolEvents } from '$utils/hysol/eventsSwiper';
import { loopHysolFooter } from '$utils/hysol/footerLoop';
import { animateHeroTitle } from '$utils/hysol/heroTitle';
import { partnersGsapSticky } from '$utils/hysol/partnersGsapSticky';
import { swiperHysolPartners } from '$utils/hysol/partnersSwiper';
import { swiperHysolWhy } from '$utils/hysol/whySwiper';
window.Webflow ||= [];
window.Webflow.push(() => {
  // tricks
  svgComponent();

  // Hysol
  swiperHysolPartners();
  swiperHysolEvents();
  swiperHysolWhy();
  loopHysolFooter();
  partnersGsapSticky();
  animateHeroTitle();
});
