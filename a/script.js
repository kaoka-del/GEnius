let order = [];
let clickorder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul


//cria ordem aleatoria
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.red');
const green = document.querySelector('.green');
const red = document.querySelector('.yellow');


let shuffleorder = () => {

let colororder = Math.floor(Math.random() * 4);

order[order.length] = colororder;
clickedorder = [];

for(let i in order) {

let elementColor = createColorElement(order[i]);

lightColor(elementColor, number(i) + 1);

  }
}
//acende próxima cor
  let lightColor = (element, number) => {
number = number * 500;
setTimeout(() => {

  element.classList.add('selected');
 }, number - 250);

setTimeout(() =>  {

element.classList.remove('selected');

});
}
// checa se os clicks sao iguais a ordem
let checkorder = () => {
    
   for(let i in clickedorder) {
    if(clickedorder[1] != order[i]) {
     lose(); 
     break;
   }
 }
if(clickedorder.length == order.length) {
alert('Pontuação: $(score)\nVocê Acertou! Iniciando Próximo nivel!');
     nextLevel();
 
  }
}

//funcao para clique  do usuario

let click = (color) => {
 clickorder[clickorder.length] = color;
 createColorElement(color).classList.add('selected');

 setTimeout (() => {
   createColorElement(color).classList.add('selected');

 checkorder();
 ),250}

}

//funcao que retorna a cor

let createColorElement = (color) => {

if(color == 0){

return green;

  }else if(color == 1){

return red;

  }else if(color == 2){

return yellow;

  }else if(color == 3){

return blue;

  }
}

// funcao next level


let nextLevel = () => {

score++;

shuffleorder();

}

//game over

let lose = () => {

alert('Pontuação:$(score)!\n Você perdeu!\n Cliqu em OK para recomeçar');
order = ();
clickedorder = [];

playgame();
}

let playgame = () => {


alert("bem vindo! iniciando");
score = 0;

nextLevel();

}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);






playgame();





























}