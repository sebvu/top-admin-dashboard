function main() {
  const themeToggler = document.querySelector("#theme-toggler");
  const rootElement = document.documentElement;
  const STORAGE_THEME_NAME = "theme";

  // set previous theme
  let theme = localStorage.getItem(STORAGE_THEME_NAME);
  if (theme) rootElement.className = theme;

  themeToggler.addEventListener("click", (e) => {
    let newTheme =
      rootElement.className.toLowerCase() === "light" ? "dark" : "light";

    // set new theme
    rootElement.className = newTheme;
    localStorage.setItem(STORAGE_THEME_NAME, newTheme);
  });
}

main();
