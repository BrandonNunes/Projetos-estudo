let x =  document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box")
let botoes = document.querySelectorAll("#botoes button");
let msg =  document.querySelector("#mensagem");
let msgtxt = document.querySelector("#mensagem p");
let segPlayer ;

let jogador1 = 0;
let jogador2 = 0;

for(i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){

        let el = checkEl(jogador1, jogador2)
       

        if(this.childNodes.length == 0){
       
        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);

        if(jogador1 == jogador2){
            jogador1++
        }else{
            jogador2++
        }
        }

    })


}
function checkEl(jogador1, jogador2) {
    if(jogador1 == jogador2) {
        el = x;
    }else{
        el = o;
    }
    return el;
}