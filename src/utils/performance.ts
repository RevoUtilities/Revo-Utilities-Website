/**
 * Performance monitoring utilities
 * Helps track and optimize application performance
 */

import { logger } from './logger';

type LayoutShiftEntry = PerformanceEntry & {
  value?: number;
  hadRecentInput?: boolean;
};

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private isDevelopment = import.meta.env.DEV;

  // Track component render times
  trackRender(componentName: string, renderFn: () => void): void {
    if (!this.isDevelopment) {
      renderFn();
      return;
    }

    const start = performance.now();
    renderFn();
    const end = performance.now();
    const duration = end - start;

    this.addMetric(`${componentName}_render`, duration);

    // Warn about slow renders
    if (duration > 16) { // 60fps threshold
      logger.warn(`Slow render detected: ${componentName} took ${duration.toFixed(2)}ms`, 'Performance');
    }
  }

  // Track async operations
  async trackAsync<T>(operationName: string, asyncFn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    try {
      const result = await asyncFn();
      const end = performance.now();
      this.addMetric(`${operationName}_async`, end - start);
      return result;
    } catch (error) {
      const end = performance.now();
      this.addMetric(`${operationName}_error`, end - start);
      throw error;
    }
  }

  // Track Core Web Vitals
  trackCoreWebVitals(): void {
    if (!this.isDevelopment) return;

    // Track Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.addMetric('lcp', lastEntry.startTime);
      
      if (lastEntry.startTime > 2500) {
        logger.warn(`Poor LCP detected: ${lastEntry.startTime.toFixed(2)}ms (should be < 2.5s)`, 'Performance');
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming; // processingStart is available on PerformanceEventTiming
        if (typeof (fidEntry as PerformanceEventTiming).processingStart === 'number') {
          const fid = (fidEntry as PerformanceEventTiming).processingStart - entry.startTime;
          this.addMetric('fid', fid);
          
          if (fid > 100) {
            logger.warn(`Poor FID detected: ${fid.toFixed(2)}ms (should be < 100ms)`, 'Performance');
          }
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry?.hadRecentInput && typeof layoutShiftEntry?.value === 'number') {
          clsValue += layoutShiftEntry.value;
        }
      });
      
      this.addMetric('cls', clsValue);
      
      if (clsValue > 0.1) {
        logger.warn(`Poor CLS detected: ${clsValue.toFixed(3)} (should be < 0.1)`, 'Performance');
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }

  // Track bundle loading times
  trackBundleLoad(): void {
    if (!this.isDevelopment) return;

    // Track Core Web Vitals
    this.trackCoreWebVitals();

    // Track initial page load
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.addMetric('page_load', navigation.loadEventEnd - navigation.fetchStart);
        this.addMetric('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.fetchStart);
        this.addMetric('ttfb', navigation.responseStart - navigation.fetchStart); // Time to First Byte

        logger.info(`Page loaded in ${(navigation.loadEventEnd - navigation.fetchStart).toFixed(2)}ms`, 'Performance');
        logger.info(`TTFB: ${(navigation.responseStart - navigation.fetchStart).toFixed(2)}ms`, 'Performance');
      }
    });

    // Track resource loading
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.name.includes('.js') || resourceEntry.name.includes('.css')) {
            this.addMetric(`resource_${resourceEntry.name.split('/').pop()}`, resourceEntry.duration);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }

  // Monitor memory usage
  trackMemoryUsage(): void {
    if (!this.isDevelopment || !('memory' in performance)) return;

    const memory = (performance as unknown as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    if (!memory) return;
    this.addMetric('memory_used', memory.usedJSHeapSize);
    this.addMetric('memory_total', memory.totalJSHeapSize);
    this.addMetric('memory_limit', memory.jsHeapSizeLimit);

    // Warn about high memory usage
    const usagePercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
    if (usagePercent > 80) {
      logger.warn(`High memory usage detected: ${usagePercent.toFixed(1)}%`, 'Performance');
    }
  }

  private addMetric(name: string, value: number): void {
    this.metrics.push({
      name,
      value,
      timestamp: Date.now(),
    });

    // Keep only last 100 metrics to prevent memory leaks
    if (this.metrics.length > 100) {
      this.metrics = this.metrics.slice(-100);
    }
  }

  // Get performance summary
  getSummary(): Record<string, { avg: number; max: number; count: number }> {
    const summary: Record<string, { values: number[]; avg: number; max: number; count: number }> = {};

    this.metrics.forEach(metric => {
      if (!summary[metric.name]) {
        summary[metric.name] = { values: [], avg: 0, max: 0, count: 0 };
      }
      summary[metric.name].values.push(metric.value);
    });

    // Calculate statistics
    const result: Record<string, { avg: number; max: number; count: number }> = {};

    Object.keys(summary).forEach(key => {
      const values = summary[key].values;
      const count = values.length;
      const avg = values.reduce((a, b) => a + b, 0) / count;
      const max = Math.max(...values);

      result[key] = {
        avg,
        max,
        count
      };
    });

    return result;
  }

  // Log performance summary (development only)
  logSummary(): void {
    if (!this.isDevelopment) return;

    const summary = this.getSummary();
    logger.info('Performance Summary:', 'Performance', summary);
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Initialize performance tracking
if (import.meta.env.DEV) {
  performanceMonitor.trackBundleLoad();

  // Track memory usage every 30 seconds in development
  setInterval(() => {
    performanceMonitor.trackMemoryUsage();
  }, 30000);

  // Log summary every 5 minutes in development
  setInterval(() => {
    performanceMonitor.logSummary();
  }, 300000);
}

export default performanceMonitor;