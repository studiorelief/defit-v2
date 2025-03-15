import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function animateHeroTitle() {
  const headingSplits = document.querySelectorAll('.hysol_hero_heading-split');
  const heroSection = document.querySelector('.section_hysol_hero');

  if (headingSplits.length === 0 || !heroSection) return;

  // Create the animation but don't play it immediately
  const animation = gsap.fromTo(
    headingSplits,
    {
      y: '-50%',
      opacity: 0,
    },
    {
      y: '0%',
      opacity: 1,
      stagger: 0.15,
      duration: 0.25,
      ease: 'power2.out',
      paused: true, // Start paused
    }
  );

  // Create ScrollTrigger to play animation when scrolling into view
  ScrollTrigger.create({
    trigger: heroSection,
    start: 'top bottom',
    onEnter: () => animation.restart(),
    onEnterBack: () => animation.restart(),
    // Make it work every time we scroll to the section
    toggleActions: 'play none none reset',
  });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', animateHeroTitle);
