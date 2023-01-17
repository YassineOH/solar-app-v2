export const switchTheme = (isDarkMode?: boolean) => {
  if (isDarkMode === undefined && localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    return;
  }

  if (isDarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

export const getCurrentTheme = () =>
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);
