let checkButton = document.getElementById("check-btn");

checkButton.addEventListener("click", palindrome);


let textInput = document.getElementById("text-input");
let result = document.getElementById("result");

function palindrome() {
  if (textInput.value == "") {
    alert("Please input a value");
    result.innerHTML = "";
    return;
  }

  const cleanStr = textInput.value.replace(/[\W_]/gi, "").toLowerCase();
  let isPal = true;

  for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      isPal = false;
      break;
    }
  }

  if (isPal == true) {
    result.innerHTML = textInput.value + " is a palindrome";
  } else {
    result.innerHTML = textInput.value + " is not a palindrome";
  }
}