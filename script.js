const amount = document.getElementById("amount");
const currency = document.getElementById("currency")
const form = document.querySelector("form")


// Manipula o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault()
  console.log(currency.value)
}

 