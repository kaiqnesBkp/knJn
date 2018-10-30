/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [undefined, 'a', 'azul', false, 23];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(x){
    if(typeof x === 'object'){
        return x;
    }
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArray(myArray)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recebeDoisParametros(x, y){
    if(typeof x === 'object' && typeof y === 'number'){
        return x[y];
    }
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [NaN, true, 'Carlos', 123, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(recebeDoisParametros(myArray2, 0));
console.log(recebeDoisParametros(myArray2, 1));
console.log(recebeDoisParametros(myArray2, 2));
console.log(recebeDoisParametros(myArray2, 3));
console.log(recebeDoisParametros(myArray2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var estante = {
        livro1:{
            quantidadePaginas: 500,
            autor: 'Caique Nunes',
            editora: 'Sol Nascente'
        },
        livro2:{
            quantidadePaginas: 250,
            autor: 'Barros Barroso',
            editora: 'Sol Crescente'
        },
        livro3:{
            quantidadePaginas: 125,
            autor: 'Tenorio',
            editora: 'Sol Poente'
        }
    };
    if(nome == undefined){
        return estante;
    } else {
        switch(nome){
            case 'livro1':
                return estante.livro1;
            case 'livro2':
                return estante.livro2;
            case 'livro3':
                return estante.livro3;
            default:
                return 'Livro não encontrado';
        }
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(book('livro1').quantidadePaginas);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro livro2 é ' + book('livro2').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro3 foi publicado pela editora ' + book('livro3').editora);