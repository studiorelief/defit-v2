import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function partnersGsapSticky() {
  gsap.registerPlugin(ScrollTrigger);

  const partnersSection = document.querySelector('.section_hysol_partners');
  const newPositionMarker = document.querySelector('.section_hysol_partners-new-position');

  if (!partnersSection || !newPositionMarker) {
    return;
  }

  (partnersSection as HTMLElement).style.position = 'fixed';
  (partnersSection as HTMLElement).style.bottom = '0';
  (partnersSection as HTMLElement).style.width = '100%';
  partnersSection.classList.add('fixed');

  ScrollTrigger.create({
    // markers: true,
    trigger: newPositionMarker,
    start: 'top bottom',
    onEnter: () => {
      gsap.to(partnersSection, {
        duration: 0,
        ease: 'none',
        onComplete: () => {
          partnersSection.classList.remove('fixed');
          (partnersSection as HTMLElement).style.position = 'relative';
          (partnersSection as HTMLElement).style.bottom = 'auto';
        },
      });
    },
    onLeaveBack: () => {
      const rect = partnersSection.getBoundingClientRect();

      partnersSection.classList.add('fixed');
      (partnersSection as HTMLElement).style.position = 'fixed';
      (partnersSection as HTMLElement).style.bottom = '0';
      (partnersSection as HTMLElement).style.width = '100%';

      gsap.fromTo(
        partnersSection,
        { y: rect.top },
        {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        }
      );
    },
  });
}
