# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
//js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var aA = soma(2, 3);

// Qual o valor atualizado dessa variável?
5

// Declare uma nova variável, sem valor.
var aB;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionaValor(){
    aB = 'VALOR';
    return 'O valor da variavel agora é VALOR.';
}

// Invoque a função criada acima.
adicionaValor();

// Qual o retorno da função? (Use comentários de bloco).
/*'O valor da variavel agora é VALOR.'*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function novaFunction(x, y, z){
    if(x === undefined || y === undefined || z === undefined || typeof x != 'number' || typeof y != 'number' || typeof z != 'number'){
        return 'Preencha todos os valores corretamente!';
    } else {
        return (x * y * z) + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
novaFunction(2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//'Preencha todos os valores corretamente!';

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
novaFunction(2, 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function novaFunction2(x, y, z){
    if(x === undefined){
        return false;
    } else if (y === undefined){
        return x;
    } else {
        if(typeof x != 'number' || typeof y != 'number'){
            return null;
        } else {
            if(z === undefined){
                return x + y;
            } else {
                if(typeof z != 'number'){
                    return null;
                } else {
                    return (x + y ) / z;
                }
            }
        }
    }
}

//OU
function novaFuncao2(x, y, z){
	//A função deve receber 3 argumentos.

	var dados = [x, y, z];
	var valid = true;
	var cont = 0;

	for (var i = 0; i < 3; i++) {
		if(!(dados[i] === undefined)){
			cont++;
			if(valid){
				valid = typeof dados[i] == 'number';
			}
		}
	}

	if(!valid){
		console.log(null);
		//Caso o valor não possa ser somado, retorne `null`.
	} else {
		switch(cont){
			case 0: console.log(false);
				//Se nenhum argumento for passado, retorna o valor booleano `false`.
				break;
			case 1: console.log(dados[0]);
				//Se somente um argumento for passado, retorna o valor do argumento.
				break;
			case 2: console.log(dados[0] + dados[1]);
				//Se dois argumentos forem passados, retorna a soma dos dois argumentos.
				break;
			default: console.log((dados[0] + dados[1]) / dados[2]);
				//Se todos os argumentos forem passados, retorna a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
				break;
		}
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
novaFunction(2)     //2
novaFunction(2,2)   //4
novaFunction(2,2,2) //2
novaFunction()      //false
novaFunction('a', 1)//null
'''
