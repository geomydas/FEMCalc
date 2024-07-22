import { setTheme } from "./scripts/theme.js";

(function () {
  const themeButtons = document.querySelectorAll(".theme-btn");

  const root = window.document.documentElement;
  const userSystemTheme = window.matchMedia("(prefers-color-scheme:dark)");
  const initializeTheme = () => {
    setTheme(localStorage.getItem("calculatorTheme"), userSystemTheme, root);
    if(localStorage.getItem("calculatorTheme") !== null){
      const currentTheme = localStorage.getItem("calculatorTheme");
      const themeIndex = (currentTheme === "dark") ? 0 : (currentTheme === "light") ? 1 : 2;
      themeButtons[themeIndex].checked = true;
    }
  }
  initializeTheme();

  const calculatorButtons = document.querySelectorAll(".calculator-btn");
  const calculatorResult = document.getElementById("calculator-result");

  const operator = ["+", "-", "/", "*"];
  const numbersValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let calculatorInput = "";
  let currentOperator = "";

  const renderCalculatorValue = () => {
    calculatorResult.textContent = calculatorInput;
  };

  const isValueOperator = (value) => {
    if (operator.includes(value)) {
      currentOperator = value;
    } else {
      currentOperator = "";
    }
  };

  const resetVariables = () => {
    calculatorInput = "";
    currentOperator = "";
  };

  const addValue = (value) => {
    if (currentOperator !== "" && !numbersValue.includes(Number(value))) return;
    isValueOperator(value);
    calculatorInput += value;
    renderCalculatorValue();
  };

  const calculateResult = () => {
    try {
      const result = eval(calculatorInput);
      if (result === Infinity) {
        throw new Error("can't divide by zero");
      }
      calculatorInput = String(result);
      currentOperator = "";
      calculatorResult.textContent = result;
    } catch (e) {
      resetVariables();
      calculatorResult.textContent = "Error";
    }
  };

  const resetCalculator = () => {
    resetVariables();
    calculatorResult.textContent = "0";
  };

  const deleteItem = () => {
    const newCalculatorInput = calculatorInput.slice(
      0,
      calculatorInput.length - 1
    );
    calculatorInput = newCalculatorInput;
    renderCalculatorValue();
  };

  calculatorButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const value = event.target.dataset.btnValue;
      addValue(value);
    });
  });

  document
    .getElementById("result-btn")
    .addEventListener("click", calculateResult);
  document
    .getElementById("reset-btn")
    .addEventListener("click", resetCalculator);
  document.getElementById("delete-btn").addEventListener("click", deleteItem);

  themeButtons.forEach((theme) => {
    theme.addEventListener("click", (event) => {
      const themeName = event.target.dataset.themeName;
      localStorage.setItem("calculatorTheme", themeName);
      setTheme(localStorage.getItem("calculatorTheme"), userSystemTheme, root);
    });
  });
})();