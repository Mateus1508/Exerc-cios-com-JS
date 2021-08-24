//Guia básico

var a = 10 // muda cada vez que o "a" se repete
let b = 100 // permanece mutável apenas no escopo = {}
const c = 1000 // n muda independente do escopo

// Operadores 
s1 = 1 + 1 // + serve para somar number e concatenar strings
s2 = 1 - 1
s3 = 1 * 1
s4 = 1 / 1
s5 = 1 % 1 // resto da divisão inteira
s6 = 1 ** 1 // potência

s7 = 1 < 1
s8 = 1 > 1
s9 = 1 <= 1
s10 = 1 >= 1
s11 = 1 == 1 // igualdade
s12 = 1 != 1
s13 = 1 === 1 // serve para identicos
s14 = 1 !== 1 // desigual restrito ou o contrário do s13

if (azul && vermelho) // se azul e vermelho...
    if (verde || azul) // se verde ou azul...
        if (n1 = !amarelo); // se n1 não for amarelo...

média = 6.0
média >= 6.0 ? "Aprovado" : "Reprovado" // media maior ou igual a 6.0 ? se sim "aprovado" se não "reprovado"


// mudando de string para number

Number.parseFloat() // muda para float
Number.parseInt() // muda para int
Number() // deixa que o js escolha entre float ou int

// de number para string

String(n)
n.toString()

//formatando strings

var s = "javascript"
"estou aprendendo s" // o js entende como apenas uma string
"estou estudando " + s // string + string = concatenação
    `estou estudando ${s}` // outra forma de concatenar(porém utilizando `` ao invés de '' ou "")
s.length // conta os caracteres
s.toUpperCase() // deixa maiúscula
s.toLowerCase() // deixa minúscula

//formatando números

var n1 = 100.8
n1.toFixed(2) // fixo com 2 casas decimais  dps da vírgula
n1.toFixed(2).replace(".", ",") // muda de "." para ","
n1.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) //comando para colocar valores monetarios de acordo com o pais

// DOM

var m1 = window.document.getElementsByTagName() // selecionar objeto por marca
var m1 = window.document.getElementsByName() // selecionar objeto pela propriedade "name"
var m1 = window.document.getElementById() // selecionar objeto por "id"
var m1 = window.document.getElementsByClassName() // selecionar objeto por "class"
var m1 = window.document.querySelector() // selecionar objeto com essa sintaxe para id "div(exemplo)#teste" e "div.teste" para class
var m1 = window.document.querySelector().innerHTML // mudar o que está escrito no HTML
var m1 = window.document.querySelector().innerText // mudar o que está escrito no texto
m1.addEventListener() // add um evento, como click do mouse

