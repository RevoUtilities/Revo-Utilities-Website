import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to conditionally join Tailwind CSS classes together
 * Uses clsx for conditional class joining and twMerge to handle Tailwind class conflicts
 * 
 * @param inputs - Class values to be conditionally joined
 * @returns Merged and de-duplicated class string
 * 
 * @example
 * // Basic usage
 * cn('px-2 py-1', 'bg-red-500')
 * // => 'px-2 py-1 bg-red-500'
 * 
 * @example
 * // With conditions
 * cn('px-2', isActive && 'bg-blue-500', isBig ? 'text-lg' : 'text-sm')
 * // => 'px-2 bg-blue-500 text-lg' (if both conditions are true)
 * 
 * @example
 * // With conflicting classes
 * cn('px-2 py-1 text-red-500', 'p-3 text-blue-500')
 * // => 'p-3 text-blue-500' (p-3 overrides px-2 py-1, text-blue-500 overrides text-red-500)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
