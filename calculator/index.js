var displayArea = document.getElementById("display");

function isOperator(buttonText) {
  if (
    buttonText === "+" ||
    buttonText === "-" ||
    buttonText === "*" ||
    buttonText === "/" ||
    buttonText === "%"
  ) {
    return true;
  } else {
    return false;
  }
}

function buttonClicked(buttonText) {
  if (displayArea.innerText === "0") {
    if (buttonText != "00") {
      if (buttonText == "." || isOperator(buttonText)) {
        displayArea.innerText = displayArea.innerText + buttonText;
      } else {
        displayArea.innerText = buttonText;
      }
    }
  } else {
    if (
      isOperator(displayArea.innerText[displayArea.innerText.length - 1]) &&
      isOperator(buttonText)
    ) {
    } else {
      displayArea.innerText = displayArea.innerText + buttonText;
    }
  }
}
