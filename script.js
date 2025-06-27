const amount = document.getElementById("amount");
const currency = document.getElementById("currency")

currency.addEventListener("submit", (event) => {
  event.preventDefault()
})

// Manipula o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");
  console.log(amount.value)
});
