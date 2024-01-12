const adviceDice = document.querySelector(".advice-dice-button");
const adviceNumber = document.querySelector(".advice-number");
const adviceQuote = document.querySelector(".advice-quote-display");

function loadQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      adviceNumber.innerHTML = `Advice #${response.slip.id}`;
      adviceQuote.innerHTML = `&#8220${response.slip.advice}&#8221`;
    });
}

adviceDice.addEventListener("click", loadQuote);
