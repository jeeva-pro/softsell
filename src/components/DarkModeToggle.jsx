import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-sm"
    >
      {enabled ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default DarkModeToggle;