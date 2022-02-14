# 📌Modulo B - Comandos básicos do JavaScript

    window.alert
    window.confirm
    window.prompt

    Comentários - importantes para deixar seu código bem documentado, em JavaScript são feito com:
    // apenas uma linha
    /**/ mais de uma linha

## Variáveis em JavaScript - VAR/LET/CONST
    var n1 = 8.5 
    var s1 = "JavaScript"

## Tipos primitivos de variáveis em JS
    Number
        infinity
        NaN
    String
    Boolean
    null
    undefined
    function
    Object
        array
    function

    tipeof variavel = tipo

## Manipulação de dados em JS

🎲Armazenando dados:
    let nome = window.prompt('Qual é o seu nome?')

Lembrando: windows.prompt() -> retorna uma string

## 🔁Conversão de números ou strings:

    Number.parseInt(n)
    Number.parseFloat(n)
    String(n)
    n.toString()

## Concatenação:

    Template String - PlaceHolder
    ex.: `O aluno ${nome} com ${idade} anos, trabalha em ${empresa}`

## Formatando strings
s.length -> quantos caracteres tem
s.toUpperCase() -> coloca tudo maiúscula
s.toLowerCase() -> como tudo minúscula

document.write -> escreve na página html

## Formatar números:
    var.toFixed(2) -> duas casas decimais 
    var.toFixed(2).replace('.',',') ->  troca pontos por vírgulas 
    var.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) -> converte para o padrão monetário do país

## Operadores

**Aritméticos:**
        + , - , * , / , % ,**
 
Incremento - X++ | Decremento X--

**Relacionais:** Resultado são booleanos (true or false)

        > , < ,  >= , <=,  == , != , ===

**Lógicos:**

        ! , &&, ||

**Ternário:** teste lógico - o que acontece se true - oque acontece se false

    teste ? true : false
    Ex.: nota > 7 ? 'APROVADO' : 'REPROVADO'
    Ex.: res = x % 2 ==0 ? 5 : 9


