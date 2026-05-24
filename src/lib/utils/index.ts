import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names safely, resolving conflicts.
 * Combines clsx (conditional class logic) + tailwind-merge (conflict resolution).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date into a human-readable string.
 * @example formatDate(new Date("2024-01-15")) → "January 2024"
 */
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Maps a value from one range to another.
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

/**
 * Returns true if the user prefers reduced motion.
 * Use on the server side (SSR-safe).
 */
export function prefersReducedMotionCSS(): string {
  return "@media (prefers-reduced-motion: reduce)";
}
