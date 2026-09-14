"use client";
import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext();
export function useTheme() { return useContext(ThemeContext); }
export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    try { const saved=localStorage.getItem('costin-theme'); if(saved === 'light' || saved === 'dark') {setTheme(saved); document.documentElement.dataset.theme=saved;} } catch {}
  }, []);
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next); document.documentElement.dataset.theme=next;
    try { localStorage.setItem('costin-theme',next); } catch {}
  }
  return <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>;
}
