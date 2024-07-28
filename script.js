let textFiledEl = document.getElementById("text-field-el");
let copyBtnEl = document.getElementById("copy-btn-el");
let generateBtnEl = document.getElementById("generate-btn-el");

generateBtnEl.addEventListener("click", generate);

function generate() {
  let arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
  ];
  copyBtnEl.innerHTML = "Copy";
  let password = "";
  let passwordLength = 14;

  for (let index = 0; index < passwordLength; index++) {
    let char = arr[Math.floor(Math.random() * arr.length)];
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
