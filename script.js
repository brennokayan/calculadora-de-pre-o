let itens = [];
let valor = 0;
let valorTotal = 0;
itemNome = "";
const elements = {
  inptAdicionarItemNome: document
    .getElementById("inpt-adicionar-item-nome")
    .addEventListener("input", (e) => {
      itemNome = e.target.value;
    }),
  inptAdicionarItemValor: document
    .getElementById("inpt-adicionar-item-valor")
    .addEventListener("input", (e) => {
      valor = Number(e.target.value);
    }),
  btnAdicionarItem: document
    .getElementById("btn-adicionar-item")
    .addEventListener("click", () => {
      valorTotal += valor;
      itens.push({ nome: itemNome, valor: valor });
      ShowItens();
      elements.h3ShowValorTotal.innerHTML = `Valor Total: ${valorTotal.toLocaleString(
        "pt-BR",
        { currency: "BRL", style: "currency" }
      )}`;
    }),
  ulShowItens: document.getElementById("show-itens-ul"),
  h3ShowValorTotal: document.getElementById("show-itens-valor-final"),
};

function ShowItens() {
  elements.ulShowItens.innerHTML = itens
    .map(
      (item, id) => `
<li class="show-itens-ul-li">${id + 1} ${
        item.nome
      } - ${item.valor.toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
      })} </li>
`
    )
    .join("");
}
