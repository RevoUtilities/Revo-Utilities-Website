/**
 * Environment-aware logging utility
 * Provides consistent logging with environment-based controls
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private isDevelopment = import.meta.env.DEV;
  private logLevel: LogLevel = this.isDevelopment ? 'debug' : 'error';

  private shouldLog(level: LogLevel): boolean {
    const levels: Record<LogLevel, number> = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3,
    };
    return levels[level] >= levels[this.logLevel];
  }

  private formatMessage(level: LogLevel, message: string, context?: string): string {
    const timestamp = new Date().toISOString();
    const prefix = context ? `[${context}]` : '';
    return `${timestamp} ${level.toUpperCase()} ${prefix} ${message}`;
  }

  debug(message: string, context?: string, data?: unknown): void {
    if (this.shouldLog('debug')) {
      console.log(this.formatMessage('debug', message, context), data || '');
    }
  }

  info(message: string, context?: string, data?: unknown): void {
    if (this.shouldLog('info')) {
      console.info(this.formatMessage('info', message, context), data || '');
    }
  }

  warn(message: string, context?: string, data?: unknown): void {
    if (this.shouldLog('warn')) {
      console.warn(this.formatMessage('warn', message, context), data || '');
    }
  }

  error(message: string, context?: string, error?: unknown): void {
    if (this.shouldLog('error')) {
      console.error(this.formatMessage('error', message, context), error || '');
    }
  }

  // Performance logging for development
  performance(label: string, fn: () => void): void {
    if (this.isDevelopment) {
      const start = performance.now();
      fn();
      const end = performance.now();
      this.debug(`Performance: ${label} took ${(end - start).toFixed(2)}ms`, 'PERF');
    } else {
      fn();
    }
  }
}

export const logger = new Logger();
export default logger;