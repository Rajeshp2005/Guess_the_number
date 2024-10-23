(function () {
  const userGuess = document.querySelector(".user");
  const form = document.querySelector("form");
  const result = document.querySelector(".result");
  const guesses = document.querySelector(".guesses");
  const startGameBtn = document.querySelector(".new-game");
  const submit = document.querySelector(".submit");
  const guessesArray = [];
  let randomGuess = Math.floor(Math.random() * 100);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = parseInt(userGuess.value);
    if (userInput === randomGuess) {
      result.innerText = "Congratulation you got it!!!";
      startGameBtn.disabled = false;
      submit.disabled = true;
    } else if (userInput > randomGuess) {
      result.innerText = "Too high!";
    } else {
      result.innerText = "Too low!";
    }
    guessesArray.push(userInput);
    guesses.innerText = "Your guesses:" + guessesArray.join(",");
    form.reset();
  });
  startGameBtn.addEventListener("click", () => {
    guesses.innerHTML = " ";
    result.innerText = "";
    startGameBtn.disabled = true;
    submit.disabled = false;
    randomGuess = Math.floor(Math.random() * 100);
  });
})();
