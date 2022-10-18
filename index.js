/*
- Tipos de Dados
- Operadores Relacionais
- Operadores Lógicos
- Estrutura Condicional

- Dados são informações que conseguimos armazenar em uma variável.
Variável: é uma "caixinha" que armazena os dados na memória de um computador.

Por exemplo: const nome = "Jaqueline"

var -> 2000 ... e bolinha;
const -> 2000 ... e bolinha;
let -> 2000 ... e bolinha;

Alguns Tipos de dados:

- Int;
- Float;
- Double;
- String;
- Booleano;
- Objetos;
- Listas;
- Undefined;
- Null;

Boas práticas (convenções):

- Toda variável deve iniciar com a letra minúscula;

Situação 1.: consT NOmE = Jessica
Situação 2.: const nome =  "Jéssica"

- Quando tivermos variáveis com dois nomes, o que fazer?;

Tipos de convenções:
    CamelCase:
        - Declaração de variáveis e para orientação a objetos (OOP);
        Exemplo (Declaração de variáveis):
            let obterResultadoSoma = x + y
        Exemplo (Nomes de arquivos):
            FooterPortfolio.js 
            footerPortfolio.js
    SnakeCase:
    - Declaração de variáveis:
    Exemplo de eclaração de variáveis:
            let obter_resultado = x + y;
    KebabCase:
        - Nome dearquivos;
        Exemplo:
        footer-portfolio.js
        segunda-pagina.html

    PaschalCase


*/
//1. Aramzene na variável nome colaboradora o nome Maria e em seguida utilize o console.log() para ver o valor;
let nomeColaboradora = 'Maria'
console.log(nomeColaboradora)
//2. Armazene uma soma entre dois números e mostre no console.log() o resultado obtido;
const x = 10
const y = 2
let soma = x + y 
console.log(soma)
//3. Armazene separadamente, TODOS os tipos de dados que vocês aprenderam até o momento; Utilize o console.log(typeof(nomeDaVariável)) para verificar que interessante.
let numeroInt = 10;
let numeroFloat = 0.2;
let textoString = "Criar um texto bem cria";
let booleanoTrue = true;
let booleanoFalse = false;
console.log(typeof(numeroInt))
console.log(typeof(numeroFloat))
console.log(typeof(textoString))
console.log(typeof(booleanoTrue))
console.log(typeof(booleanoFalse))

//4. Armazene o nome chamado Eduarda em uma variável e use a notação de colchete para encontrar o primeiro caractere do nome armazenado. Por exemplo, o primeiro caractere do nome Eduarda é E. No caso, no console.log() deverá aparecer SOMENTE A PRIMEIRA LETRA;

let nomeEx = "Jéssica"
console.log(nomeColaboradora.charAt(0))
console.log(nomeColaboradora.charAt(nomeColaboradora.length - 1))


/*Crie duas variáveis e compare os valores: 
1. a variável x é maior que o variável y? 
Se for verdadeira, retornar com a mensagem no console.log(O maior número é x). 
Se não for verdadeira, retornar com a mensagem no console.log(O número maior é y);
*/
let numX = 10
let numY = 5

if(numX < numY){
    console.log(`O maior número é ${numX}`)
} else{
    console.log(`O maior número é ${numY}`)
}