/**
 * Safari Performance Optimization Utility
 * 
 * This utility injects a small script that detects Safari and applies
 * performance optimizations specific to Safari browsers.
 */

export const safariPerformanceOptimizer = () => {
  const optimizerScript = `
  (function() {
    // Detect Safari browser
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
      // Flag for other components to check
      window.isSafariBrowser = true;
      
      // Add a class to the body for potential CSS optimizations
      document.documentElement.classList.add('safari-browser');
      
      // Optimize requestAnimationFrame for Safari
      const requestAnimationFrame = window.requestAnimationFrame;
      window.requestAnimationFrame = function(callback) {
        // Throttle animations slightly in Safari for better performance
        return requestAnimationFrame(function(timestamp) {
          callback(timestamp);
        });
      };
      
      // Limit concurrent animations by throttling ones that are off-screen
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;
          
          // If element has animation classes and is not in view
          if (!entry.isIntersecting && 
              (target.classList.contains('animate-pulse') || 
               target.style.animation || 
               target.classList.contains('motion-safe'))) {
            
            // Pause animations when not in viewport
            target.style.animationPlayState = 'paused';
            
            // For elements with Framer Motion animations, add a data attribute
            // that our components can check
            target.setAttribute('data-animation-paused', 'true');
          } else if (entry.isIntersecting) {
            // Resume animations when in viewport
            target.style.animationPlayState = 'running';
            target.removeAttribute('data-animation-paused');
          }
        });
      }, { threshold: 0.1 });
      
      // Observe all animated elements
      setTimeout(() => {
        document.querySelectorAll('.motion-safe, [class*="animate-"], [style*="animation"]')
          .forEach(el => observer.observe(el));
      }, 1000); // Delay to ensure all elements are rendered
      
      // Add hint for hardware acceleration to crucial elements
      const acceleratedStyles = document.createElement('style');
      acceleratedStyles.textContent = \`
        .safari-optimized {
          transform: translateZ(0);
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        
        /* Reduce blur intensity in Safari */
        .safari-browser [class*="blur-"] {
          filter: blur(var(--tw-blur, 30px));
        }
        
        /* Optimize large images in Safari */
        .safari-browser img {
          transform: translateZ(0);
        }
      \`;
      document.head.appendChild(acceleratedStyles);
      
      console.log('[Safari Optimizer] Applied performance optimizations for Safari');
    }
  })();
  `;

  return optimizerScript;
};

export default safariPerformanceOptimizer;
