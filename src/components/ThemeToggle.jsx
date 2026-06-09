import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-[color:var(--page-surface)] text-[color:var(--primary)] border border-[color:var(--border)] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[color:var(--surface-soft)] dark:bg-[color:var(--page-surface)] dark:border-[color:var(--border)] dark:text-[color:var(--primary)] dark:hover:bg-[color:var(--surface-soft)]"
      aria-label="Toggle theme"
      id="theme-toggle"
    >
      <div className="transition-transform duration-300 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon size={20} className="text-[color:var(--text-secondary)]" />
        ) : (
          <Sun size={20} className="text-[color:var(--accent)]" />
        )}
      </div>
    </button>
  );
}
