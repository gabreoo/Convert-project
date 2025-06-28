const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");

// Definindo o valor da cotação
const USD = 5.59;
const GBP = 7.52;
const EUR = 6.43;

// Manipula o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");

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
});

// capturando qual moeda vai ser usada
form.onsubmit = (event) => {
  event.preventDefault();
};

function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)
}
