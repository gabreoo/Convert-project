// Definindo o valor da cotação
const USD = 5.59;
const GBP = 7.52;
const EUR = 6.43;

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

// Manipula o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");
});

// capturando qual moeda vai ser usada
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    footer.classList.add("show-result");
    description.textContent = `${symbol} 1 = ${price}`
  } catch (error) {
    footer.classList.remove("show-result");
    alert("Algo saiu errado, por favor tente novamente em alguns instantes");
    console.log(error);
  }
}
