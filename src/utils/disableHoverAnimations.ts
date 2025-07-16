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
    
    // Only log in development
    if (import.meta.env.DEV) {
      console.log('[Animation Optimizer] Reduced hover animations enabled');
    }
  } else {
    // Enable normal hover animations
    document.documentElement.style.setProperty('--hover-translate-y', '-4px');
  }
};

// Utility to detect high CPU usage and reduce animations
export const detectHighCPUUsage = () => {
  let lastTimestamp = performance.now();
  let frameCount = 0;
  let consecutiveSlowFrames = 0;
  
  function checkFrameRate() {
    const now = performance.now();
    frameCount++;
    
    // Check every second
    if (now - lastTimestamp >= 1000) {
      const fps = Math.round(frameCount * 1000 / (now - lastTimestamp));
      
      // If FPS drops below 30, consider it a high CPU load
      if (fps < 30) {
        consecutiveSlowFrames++;
        
        // If we've had multiple consecutive slow frame reports, reduce animations
        if (consecutiveSlowFrames >= 2) {
          document.body.classList.add('reduce-animations');
          document.body.classList.add('high-cpu-detected');
        }
      } else {
        consecutiveSlowFrames = 0;
        document.body.classList.remove('high-cpu-detected');
      }
      
      // Reset counters
      lastTimestamp = now;
      frameCount = 0;
    }
    
    requestAnimationFrame(checkFrameRate);
  }
  
  requestAnimationFrame(checkFrameRate);
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
  
  // Only log in development
  if (import.meta.env.DEV) {
    console.log('[Animation Optimizer] All non-essential animations disabled');
  }
};

export default disableHoverAnimations;
