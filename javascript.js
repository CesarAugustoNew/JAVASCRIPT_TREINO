//ESTRUTURAS CONDICIONAIS
const x = 10
const y = 10

if (x < y) {
   console.log("x é menor do que y");
} else if (x > y) {
   console.log("x é maior do que y");
} else if (x == y) {
   console.log("x é igual a y");
}

//ESTRUTURAS CONDICIONAIS MELHORANDO LÓGICA

if (x < y) {
   console.log("x é menor do que y");
} else if (x > y) {
   console.log("x é maior do que y");
} else {
   console.log("x é igual a y");
}

//ESTRUTURAS CONDICIONAIS SWITCH
const cor = "vermelho";

switch(cor) {
   case "vermelho":
      console.log("a cor é vermelho");
      break;
   case "verde":
      console.log("a cor é verde");
      break;
   case "azul":
      console.log("a cor é azul");
      break;
      default:
         console.log("a cor não é vermelho, nem verde, nem azul");

}

const contador = 5
   switch(contador) {
      case 5:
         console.log("5")
      case 4:
         console.log("4")
      case 3:
         console.log("3")
      case 2:
         console.log("2")
      case 1:
         console.log("1")
      default:
         console.log("BOOOOOOOMMM!!")
   }

   const sexo = "f"

   switch (sexo){
      case "M":
      case "m":
         console.log("Masculino");
         break
      case "F":
      case "f":
         console.log("Feminino");
         break
      default:
         console.log("Inválido");
   }
   //OPERADOR TERNARIO

   let numero = cor == "vermelho" ? 10 : 20; 
   console.log(numero);

   //ESTRUTURAS DE REPETIÇÕES WHILE

   let i = 0;
   while (i < 3) {
      console.log("miau");
      i++;
   }
   //ESTRUTURAS DE REPETIÇÕES FOR
   
   for (let i = 0; i < 10; i++) {
      console.log(`numero da repeticao for ${i}`);
   }


   




   
   