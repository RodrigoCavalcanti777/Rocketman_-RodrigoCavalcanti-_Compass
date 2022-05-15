/*Váriaveis

let idade = 5;
console.log(idade);
let tamanho = 1.70;
console.log(tamanho);
*/

/*Constantes
const valorIngresso = 30;
valorIngresso = 40;
console.log(valorIngresso)
*/

/*Tipos primitivos

let nome = 'Rodrigo'; //String literal
let idade = 20;// number literal
let estaAprovado = true; // boolean
let sobreNome; // valor Padrão ou Undefinied
let corSelecionada = null // usada para reset ou redefinir um valor
*/

/*Tipagem Dinâmica

O Javascript é uma linguagem dinamica e inteligente, 
reconhecendo o tipo da váriavel.

*/

// Objetos

let pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Silva'
}
console.log(pessoa);

//Arrays

let formula1 = ['Senna', 2, 1, 3];
console.log(formula1);

//functions
function Dobro(numero){
return numero * 2;
}

console.log(Dobro(5));


/* Operador ternário

O operador ternário serve por exemplo, para não usar tantos if e elses..

*/
//cliente com o título de comum e premium
let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum'

console.log(tipo);

/* if e else
basicamente o if e else é usado para passar uma determinada condição
no código.

*/

let nota = 6;

if(nota <= 4){
console.log('Voce está na recuperação');

}else{
    console.log('Voce está aprovado');
}


/* Switch case

também é uma estrutura condicional parecida com o if..else

*/

let permissao
permissao = 'comum';

switch (permissao) {
    case 'comum': 
    console.log('Usuário Comum');
        break;
    case 'gerente': 
    console.log('Voce é um gerente');
    break;
    case 'vip': 
    console.log('Voce é um cliente vip');
    break; 

    default:
    console.log('Usuario nao reconhecido')
        break;
}

//Estrutura de repetição for

for (let i = 0; i < 5; i++){
    console.log('Estou aprendendo', i);
}















