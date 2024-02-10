const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function () {
  const firstBox = document.querySelector(".container");

  const secondBox = document.querySelector(".after-submission");

  if (firstBox.style.display === "block") {
    firstBox.style.display = "none";
    secondBox.style.display = "block";
  } else {
    firstBox.style.display = "block";
    secondBox.style.display = "none";
  }
});

const rateAgain = document.querySelector(".rate-again");
rateAgain.addEventListener("click", function () {
  const firstBox = document.querySelector(".container");

  const secondBox = document.querySelector(".after-submission");

  if (firstBox.style.display === "block") {
    firstBox.style.display = "none";
    secondBox.style.display = "block";
  } else {
    firstBox.style.display = "block";
    secondBox.style.display = "none";
  }
});

// const newText = document.getElementByClassName("new");

const buttons = document.querySelectorAll(".circle-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.classList.toggle("active");
    updateButtonStyles(this);

    // newText.innerHTML = this.innerHTML;
  });
}

function updateButtonStyles(button) {
  if (button.classList.contains("active")) {
    button.style.color = "white";
    button.style.backgroundColor = "hsl(217, 12%, 63%)";
  } else {
    // Reset to default styles when not active
    button.style.color = "";
    button.style.backgroundColor = "";
  }
}
