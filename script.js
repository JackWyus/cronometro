"use strit"

var segundos = 0;
var minutos = 0;
var horas = 0;

var intervalo;

var temporizadorIniciado = false;
var temporizadorPausado = false;


/*

1º - > A função iniciar será Ativada quando o botão de "Iniciar" for acionado, invocando primeiramente a verificação da condicional "if"; 
"se o temporizadorIniciado for igual a false(no início, ele sempre será falso, pois definimos sua variável como esse valor), começa a chamar a função "contador" a cada 1000 milésismos, terminando a estrutura nessa rota com a troca do valor da variável que de início era "false" para "true", para impedir que o usuário chame mais de uma vez a mesma função e comece uma contagem mais rápida assim."

Lembrando que quando a primeira condicionar for iniciada e após isso, não será possível até o momento iniciar novamente devido ao seu valor ser true.

2º - > Quando o usuário clicar em "Pausar" a função pausar será ativada e Sessará a contágem,







*/

function iniciar() {
    if (temporizadorIniciado === false) {
        intervalo = setInterval(contador, 1000);
    } else if(temporizadorPausado === true) {
        intervalo = setInterval(contador, 1000);
        temporizadorPausado = false;
    }
    
    temporizadorIniciado = true;
}

function pausar() {
    clearInterval(intervalo);
    temporizadorPausado = true;
}


function resetar() {
    clearInterval(intervalo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById('temporizador').innerHTML = '00:00:00';
}


/*A função contador vai pegar o valor da variável segundos e vai adicionar +1*/

function contador() {
    segundos = segundos + 1;

    if (segundos == 60) {
        segundos = 0;
        minutos = minutos + 1;

        /*Após isso a variável zero tem que fazer uma nova contagem, então vamos zerar ela*/

        if (minutos == 60) {
            minutos = 0;
            horas = horas + 1;
        }
    }

    /*Como queremos que o minutos seja mostrado também, adicionamos ele e concatenamos com os dois pontos, pois ele é uma string e entraria em conflito com os número*/
    document.getElementById('temporizador').innerHTML = doisDigito(horas) + ':' + doisDigito(minutos) + ':' + doisDigito(segundos);
}


/*Essa função vai pegar o "digit" e se ele for menor que 10, ela vai retornar uma string '0'+digit, fazendo uma concatenação*/

function doisDigito(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}


/*

<"use strit">

    O objetivo de "use strict" é indicar que o código deve ser executado em "modo estrito".
        Com o modo estrito, você não pode, por exemplo, usar variáveis ​​não declaradas.
    Dica: Você pode usar o modo estrito em todos os seus programas. Ele ajuda você a escrever um código mais limpo, como impedir que você use variáveis ​​não declaradas.


Método novos;

    setInterval() = O setInterval()método chama uma função em intervalos especificados (em milissegundos).

        Valor de retorno: 
            Tipo	Descrição
            <Um número>	O id do temporizador.
                Observação: Use este id com clearInterval() para cancelar o cronômetro.

    clearInterval() = O clearInterval()método limpa um timer definido com o setInterval()método.

*/
