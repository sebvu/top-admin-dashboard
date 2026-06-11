function main() {
  const themeToggler = document.querySelector("#theme-toggler");
  const rootElement = document.documentElement;

  themeToggler.addEventListener("click", (e) => {
    const currTheme = rootElement.className;

    rootElement.className =
      currTheme.toLowerCase() === "light" ? "dark" : "light";
  });
}

main();
