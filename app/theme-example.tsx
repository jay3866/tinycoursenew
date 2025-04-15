"use client";

import { useState } from 'react';
import { setTheme, ThemeType } from './theme-switch';
import { Button } from "@/components/ui/button";

// This is just an example component to demonstrate how to switch themes
// You can use the setTheme function directly in your code

export default function ThemeExample() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('orange');
  
  const toggleTheme = () => {
    const newTheme: ThemeType = currentTheme === 'orange' ? 'salmon' : 'orange';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={toggleTheme}
        variant="outline"
        className="bg-white shadow-md"
      >
        Current theme: {currentTheme}
      </Button>
    </div>
  );
}
