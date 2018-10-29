# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var istruthy = function(x){
    if(x){
        return true;
    } else {
        return false;
    }
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy("");
isTruthy(false);
isTruthy(undefined);
isTruthy(NaN);
isTruthy(null);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy(-1);
isTruthy(' ');
isTruthy(" ");
isTruthy(true);
isTruthy(1 > 0);
isTruthy(1 != 0);
isTruthy(!(1 == 0);
isTruthy('jo');
isTruthy(1234);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Renault',
    modelo: 'Logan',
    placa: 'XYZ-9876',
    ano: 2018,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudaCor(x){
    carro.cor = x;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function obterModelo(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function obterMarca(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo(){
    return 'Esse carro é um ' + obterMarca() + ' ' + obterModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
function adicionarPessoasOld(x){
    let msg = '';
    if (carro.quantidadePessoas == 5){
        return 'O carro já está lotado!';
    } else if (carro.quantidadePessoas + x <= 5){
        carro.quantidadePessoas += x;
        if (carro.quantidadePessoas == 4){
            msg = 'Só cabe mais 1 pessoa!';
        } else if (carro.quantidadePessoas < 5){
            msg = 'Só cabem mais ' + (5 - carro.quantidadePessoas) + ' pessoas!';
        }
    }
    return msg + ' Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
}

function adicionarPessoas(x){
    if(typeof x == 'number'){
        if(x < 0 && x > -6){
            carro.quantidadePessoas += x;
            if(-(x) == 1){
                return -(x) + ' pessoa removida do carro';
            } else {
                return -(x) + ' pessoas removidas do carro!';
            }
        }
        if(carro.quantidadePessoas == 5){
            return 'O carro já está lotado!';
        } else {
            if(carro.quantidadePessoas + x <= 5){
                carro.quantidadePessoas += x;
                if(carro.quantidadePessoas == 1){
                    return 'Já temos ' + carro.quantidadePessoas + ' pessoa no carro!';
                } else {
                    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
                }
            } else if (carro.quantidadePessoas - 5 == 1){
                return 'Só cabe mais ' + (5 - carro.quantidadePessoas) + ' pessoa!';
            } else {
                return 'Só cabem mais ' + (5 - carro.quantidadePessoas) + ' pessoas!';
            }
        }
    } else {
        return 'Valor inválido, favor inserir apenas numeros';
    }
}


Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

// Qual a cor atual do carro?
obterCor(); //Preto

// Mude a cor do carro para vermelho.
mudaCor('Azul');

// E agora, qual a cor do carro?
obterCor(); //Azul

// Mude a cor do carro para verde musgo.
mudaCor('Verde Musgo');

// E agora, qual a cor do carro?
obterCor(); //Verde Musgo

// Qual a marca e modelo do carro?
obterMarcaModelo(); //

// Adicione 2 pessoas no carro.
adicionarPessoas(2);

// Adicione mais 4 pessoas no carro.
adicionarPessoas(4);

// Faça o carro encher.
adicionarPessoas(3);

// Tire 4 pessoas do carro.
adicionarPessoas(-4);

// Adicione 10 pessoas no carro.
adicionarPessoas(10); 

// Quantas pessoas temos no carro?
adicionarPessoas(0); // Já temos 1 pessoa no carro.