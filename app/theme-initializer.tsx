"use client";

import { useEffect } from 'react';
import { initTheme } from './theme-switch';

export default function ThemeInitializer() {
  useEffect(() => {
    // Initialize theme on client side
    initTheme();
  }, []);
  
  return null; // This component doesn't render anything
}
