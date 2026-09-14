"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
export default function ThemeSwitcher() {
  const {theme,toggleTheme}=useTheme();
  return <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Moon size={21} /> : <Sun size={21} />}</button>;
}
