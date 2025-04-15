"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";
import { Paintbrush } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 shadow-md"
      onClick={toggleTheme}
      title={`Switch to ${theme === 'orange' ? 'salmon' : 'orange'} theme`}
    >
      <Paintbrush className={`h-5 w-5 ${theme === 'salmon' ? 'text-pink-500' : 'text-primary'}`} />
    </Button>
  );
}
