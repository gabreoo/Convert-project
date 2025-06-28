// Definindo o valor da cotação
const USD = 5.59;
const GBP = 7.52;
const EUR = 6.43;

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result")

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
    // Exibindo o conteúdo
    footer.classList.add("show-result");

    // Exibe a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // calcula o valor convertido da moeda
    let total = (amount * price).toFixed(2)
    total = formatCurrencyBRL(total).replace("R$", "")
    // altera o resultado do footer 
    result.textContent = total 
  } catch (error) {
    // remove o conteúdo exibido pois houve algum erro
    footer.classList.remove("show-result");
    alert("Algo saiu errado, por favor tente novamente em alguns instantes");
    console.log(error);
  }
  
}

// converte o valor em formato americano com "." no fomato brasileiro de valor com ","
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
