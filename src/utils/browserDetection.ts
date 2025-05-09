/**
 * Utility functions for browser detection and feature optimization
 */

/**
 * Detects if the current browser is Safari
 * @returns boolean indicating if the user is on Safari
 */
export const isSafari = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  return (
    ua.indexOf('safari') !== -1 && 
    ua.indexOf('chrome') === -1 &&
    ua.indexOf('android') === -1
  );
};

/**
 * Detects if the current device is likely to be low-powered
 * (mobile devices or older computers)
 * @returns boolean indicating if performance optimizations should be applied
 */
export const isLowPowerDevice = (): boolean => {
  // Check for mobile devices
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  // For desktop Safari, we could add more sophisticated detection
  // but for now we'll just treat all Safari instances as potentially
  // needing optimization
  return isMobile || isSafari();
};

/**
 * Returns appropriate animation settings based on browser and device capabilities
 * @returns object with animation configuration options
 */
export const getAnimationConfig = () => {
  const needsOptimization = isLowPowerDevice();
  
  return {
    // Reduce animation duration on Safari/low-power devices
    durationMultiplier: needsOptimization ? 0.7 : 1,
    
    // Reduce number of animated elements on Safari/low-power devices
    staggerChildrenDelay: needsOptimization ? 0.1 : 0.2,
    
    // Disable some animations entirely for Safari/low-power devices
    enableParallaxEffects: !needsOptimization,
    
    // Reduce blur intensity for Safari
    blurMultiplier: isSafari() ? 0.3 : 1
  };
};
