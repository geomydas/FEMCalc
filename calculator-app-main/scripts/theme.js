function setTheme(localStorageTheme, userSystemTheme, root) {
  if (localStorageTheme !== null) {
    const currentTheme = localStorageTheme;
    loadTheme(currentTheme, root);
    return;
  }
  if (userSystemTheme.matches) {
    saveTheme("dark");
    loadTheme("dark", root);
  } else {
    saveTheme("light");
    loadTheme("light", root);
  }
}

function saveTheme(theme) {
  localStorage.setItem("calculatorTheme", theme);
}

function loadTheme(theme, root) {
  const setThemeList = (variableList) => {
    for (const variable in variableList) {
      root.style.setProperty(variable, variableList[variable]);
    }
  };

  if (theme === "dark") {
    setThemeList(themeValues("dark"));
  } else if (theme === "light") {
    setThemeList(themeValues("light"));
  } else if (theme === "custom") {
    setThemeList(themeValues("custom"));
  }
}

function themeValues(theme) {
  const darkTheme = {
    "--main-bg": "hsl(222, 26%, 31%)",
    "--secondary-bg": "hsl(223, 31%, 20%)",
    "--result-screen-bg": "hsl(224, 36%, 15%)",
    "--number-btn-bg": "hsl(30, 25%, 89%)",
    "--function-bg": "hsl(225, 21%, 49%)",
    "--accent-bg": "hsl(6, 63%, 50%)",
    "--text-primary-clr": "hsl(0, 0%, 100%)",
    "--text-secondary-clr": "hsl(222, 26%, 31%)",
    "--text-equal-clr": "hsl(0, 0%, 100%)",
    "--text-function-clr": "hsl(0, 0%, 100%)",
    "--number-btn-shadow": "hsl(28, 16%, 65%)",
    "--function-btn-shadow": "hsl(224, 28%, 35%)",
    "--function-equal-shadow": "hsl(6, 70%, 34%)",
  };

  const lightTheme = {
    "--main-bg": "hsl(0, 0%, 90%)",
    "--secondary-bg": "hsl(0, 5%, 81%)",
    "--result-screen-bg": "hsl(0, 0%, 93%)",
    "--number-btn-bg": "hsl(0, 5%, 81%)",
    "--function-bg": "hsl(185, 42%, 37%)",
    "--accent-bg": "hsl(25, 98%, 40%)",
    "--text-primary-clr": "hsl(60, 10%, 19%)",
    "--text-secondary-clr": "hsl(60, 10%, 19%)",
    "--text-equal-clr": "hsl(0, 0%, 100%)",
    "--text-function-clr": "hsl(0, 0%, 100%)",
    "--number-btn-shadow": "hsl(35, 11%, 61%)",
    "--function-btn-shadow": "hsl(185, 58%, 25%)",
    "--function-equal-shadow": "hsl(25, 99%, 27%)",
  };

  const customTheme = {
    "--main-bg": "hsl(268, 75%, 9%)",
    "--secondary-bg": "hsl(268, 71%, 12%)",
    "--result-screen-bg": "hsl(268, 71%, 12%)",
    "--number-btn-bg": "hsl(268, 47%, 21%)",
    "--function-bg": "hsl(281, 89%, 26%)",
    "--accent-bg": "hsl(176, 100%, 44%)",
    "--text-primary-clr": "hsl(52, 100%, 62%)",
    "--text-secondary-clr": "hsl(52, 100%, 62%)",
    "--text-equal-clr": "hsl(198, 20%, 13%)",
    "--text-function-clr": "hsl(0, 0%, 100%)",
    "--number-btn-shadow": "hsl(285, 91%, 52%)",
    "--function-btn-shadow": "hsl(290, 70%, 36%)",
    "--function-equal-shadow": "hsl(177, 92%, 70%)",
  };

  return theme === "light"
    ? lightTheme
    : theme === "custom"
    ? customTheme
    : darkTheme;
}

export { setTheme };
