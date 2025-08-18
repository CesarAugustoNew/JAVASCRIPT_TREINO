const notaPrimeiroBi = 8;
const notaSegundoBi = 2;
const notaTerceiroBi = 5.1;
const notaQuartoBi = 10;

const media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
    media += media * 0.1;
}

console.log(`a media e ${media.toFixed(2)}`);

////////////////////////////////////////////////////////

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log(`o resultado da expressao e de ${resultado}`);

let teste;
teste = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", teste);


////////////////////////////////////////////////////////////


function realizarVenda(quantidade) {
    if (quantidade > estoqueProdutoA) {
        console.log("Quantidade insuficiente em estoque.");
    } else {
        estoqueProdutoA -= quantidade;
        console.log(`Venda realizada com sucesso. Novo estoque: ${estoqueProdutoA}`);
    }
}

/////////////////////////////////////////////////////////////////

const idade = 10;
const possuirCarteira = true;

if (idade <= 18){
    console.log(`voce nao tem idade para tirar a carteira`);
}else {
    console.log(`voce pode tirar a carteira de motorista`);
}
/////////////////////////////////////////////////////////////////

const temExperiencia = true;
const temDiploma = false;

if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
    console.log("Não pode se candidatar ao emprego.");
}
////////////////////////////////////////////////////////////////////////

const chuva = false;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}
//////////////////////////////////////////////////////////////////

;

const notas = [ 10, 5, 15, 2, 20]

let somaDasNotas = 0

notas.forEach(function(nota){
    somaDasNotas += nota;
})

const raro = somaDasNotas / notas.length;

console.log(`a media das notas e ${raro}`);
////////////////////////////////////////////////////

const numeros = [2, 4, 6, 8];
let soma = 0;

numeros.forEach(numero => {
    soma += numero;
});

console.log("A soma dos números é:", soma);
///////////////////////////////////////////////////////

