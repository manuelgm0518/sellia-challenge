export enum AppThemes {
  LIGHT = "light",
  DARK = "dark",
}

export const useAppThemeStore = defineStore("AppThemeStore", () => {
  const theme = ref(AppThemes.DARK);

  function swap(newTheme?: AppThemes) {
    theme.value = newTheme ?? (theme.value === AppThemes.DARK ? AppThemes.LIGHT : AppThemes.DARK);
    console.log(theme.value);
    if (theme.value === AppThemes.DARK) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  return { theme, swap };
});
