/**
 * Utility to disable excessive hover animations throughout the application
 */

/**
 * Applies the disable-hover-animations class to the body element
 * Should be called early in the application lifecycle
 */
export const disableHoverAnimations = (force: boolean = false) => {
  // Check if we should apply the class
  // We can force this, apply it for Safari, or respect system preferences
  const shouldDisable = 
    force || 
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (shouldDisable) {
    document.body.classList.add('disable-hover-animations');
    
    // This class prevents buttons and interactive elements from moving on hover
    document.documentElement.style.setProperty('--hover-translate-y', '0px');
    
    console.log('[Animation Optimizer] Reduced hover animations enabled');
  } else {
    // Enable normal hover animations
    document.documentElement.style.setProperty('--hover-translate-y', '-4px');
  }
};

/**
 * Disables all non-essential animations and transitions
 * More aggressive than disableHoverAnimations
 */
export const disableAllAnimations = () => {
  document.body.classList.add('disable-hover-animations');
  document.body.classList.add('disable-all-animations');
  
  // Apply CSS variables to remove animations
  document.documentElement.style.setProperty('--animation-duration', '0s');
  document.documentElement.style.setProperty('--hover-translate-y', '0px');
  
  console.log('[Animation Optimizer] All non-essential animations disabled');
};

export default disableHoverAnimations;
