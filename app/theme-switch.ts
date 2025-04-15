"use client";

// Simple script to switch between themes
// To use: import { setTheme } from '@/app/theme-switch'
// Then call: setTheme('orange') or setTheme('salmon')

export type ThemeType = 'orange' | 'salmon';

export function setTheme(theme: ThemeType): void {
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--theme', theme);
    console.log(`Theme switched to: ${theme}`);
  }
}

// Initialize with default theme
export function initTheme(): void {
  if (typeof document !== 'undefined') {
    // Read the theme from CSS variable
    const computedStyle = getComputedStyle(document.documentElement);
    const currentTheme = computedStyle.getPropertyValue('--theme').trim();
    setTheme(currentTheme as ThemeType);
  }
}
