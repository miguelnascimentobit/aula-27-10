// let body = document.querySelector("body");
// let div = document.querySelector("div");
// body.removeChild(div);

//Atividade 01
// let body = document.querySelector("body");
// let h1 = document.querySelector("h1");
// body.removeChild(h1);

//esse comando serve para eu acessar as propriedades de core da fonte no html

// let h1 = document.querySelector("#trocarCor");
// h1.style.color = 'MidnightBlue';
// h1.style.background = 'DeepSkyBlue'
// h1.style.height = '40px'
// console.log(h1)

//SEMPRE QUE QUISER ALTERAR OU SABER UM VALOR DE CSS DE UM ELEMENTO HTML:
 
//nomeDaTag.style.atributo
// let body = document.querySelector("body");
// body.style.backgroundColor = 'DeepSkyBlue'

// var h1 = document.querySelector("h1")
// var paragrafo = document.querySelector("p");

// paragrafo.innerText = h1.innerText;

// let corDeFundo = prompt("Digite as cores primárias (red, blue ou yellow) e secundárias (green, orange ou purple) que deseja mudar o fundo da página:");
// function verificarCor(corDeFundo){
//     if(corDeFundo === "blue" || corDeFundo === "yellow" || corDeFundo === "red"){
//         return "Cor primaria escolhida."
//     }
//     else if (corDeFundo === "green" || corDeFundo === "orange" || corDeFundo === "purple" ){
//         return "Cor secundária escolhida."
//     }
//     else{
//         return "Essa cor não é primária nem secundária."
//     }
// }
// let cor = verificarCor(corDeFundo);

// let body = document.querySelector("body");

// body.style.backgroundColor = corDeFundo

// alert(cor);

// let button= document.querySelector("button");

// button.addEventListener("click",function(){
//     console.log("cliquei")
// });

let body = document.querySelector("body");
let p = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener("click",function (){
    body.style.backgroundColor = 'black'
    p.style.color= 'white'
    button.style.background= 'DarkSlateGrey'
    button.style.color = 'white'
})
