let textFiledEl = document.getElementById("text-field-el");
let copyBtnEl = document.getElementById("copy-btn-el");
let generateBtnEl = document.getElementById("generate-btn-el");
let sliderEl = document.getElementById("slider-el");
let sliderValueEl = document.getElementById("slider-value");
let lowercaseCheckbox = document.getElementById("lowercase-checkbox");
let uppercaseCheckbox = document.getElementById("uppercase-checkbox");
let numbersCheckbox = document.getElementById("numbers-checkbox");
let symbolsCheckbox = document.getElementById("symbols-checkbox");

sliderEl.addEventListener("input", () => {
  sliderValueEl.textContent = sliderEl.value;
});

generateBtnEl.addEventListener("click", generate);

function generate() {
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()-_=+";

  let availableCharacters = "";

  if (lowercaseCheckbox.checked) {
    availableCharacters += lowercase;
  }
  if (uppercaseCheckbox.checked) {
    availableCharacters += uppercase;
  }
  if (numbersCheckbox.checked) {
    availableCharacters += numbers;
  }
  if (symbolsCheckbox.checked) {
    availableCharacters += symbols;
  }

  if (availableCharacters === "") {
    alert("Please select at least one character type.");
    return;
  }

  copyBtnEl.innerHTML = "Copy";
  let password = "";
  let passwordLength = sliderEl.value;

  for (let index = 0; index < passwordLength; index++) {
    let char =
      availableCharacters[
        Math.floor(Math.random() * availableCharacters.length)
      ];
    password += char;
  }
  textFiledEl.value = password;
}

copyBtnEl.addEventListener("click", copy);

function copy() {
  if (textFiledEl.value === "") {
    alert("Generate Password first");
  } else {
    navigator.clipboard.writeText(textFiledEl.value);
    copyBtnEl.innerHTML = "Copied";
  }
}
