const ul = document.querySelector(".itens");
console.log(ul);

//Remover um elemento
//ul.remove

//Remover uo ultimo elemento filho
//ul.LastElementChild.remove()

//Defenir o conteúdo de texto de um elemento

//ul.firstElementChild.textContent = "ola";

ul.firstChild.textContent = "Ola";
// Definir o html interno de um elemento
ul.lastElementChild.innerHTML = "<h1>Oi</h1>";

const botao = document.querySelector(".botao");
 
//Alterar os estilos de um elemento de forma dinâmica
botao.style.background = "yellow";

