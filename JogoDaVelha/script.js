let x =  document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box")
let botoes = document.querySelectorAll("#botoes button");
let mensagem =  document.querySelector("#mensagem");
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
            if(segPlayer == "btnIA"){
                jogador2++;
                jogadaIA();

            }

        }else{
            jogador2++
        }
        checarvencedor()
        }

    })
}

//eventos botoes
    for(i = 0; i < botoes.length; i++){
        botoes[i].addEventListener("click",function() {
            segPlayer = this.getAttribute("id")

            for(j = 0; j < botoes.length; j++){
                botoes[j].style.display = "none";

            }
            setTimeout(function(){
                let container = document.getElementById("container")
                container.classList.remove("hide")
            },500)
        });


    }


function checkEl(jogador1, jogador2) {
    if(jogador1 == jogador2) {
        el = x;
    }else{
        el = o;
    }
    return el;
}

function checarvencedor(){
    let b1 = document.getElementById("bloco1")
    let b2 = document.getElementById("bloco2")
    let b3 = document.getElementById("bloco3")
    let b4 = document.getElementById("bloco4")
    let b5 = document.getElementById("bloco5")
    let b6 = document.getElementById("bloco6")
    let b7 = document.getElementById("bloco7")
    let b8 = document.getElementById("bloco8")
    let b9 = document.getElementById("bloco9");

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            declararVencedor("x")
        } else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
            declararVencedor("o")
        }



    }
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
    
        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            declararVencedor("x")
        } else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            declararVencedor("o")
        }
    
    
    
    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){
    
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
    
        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            declararVencedor("x")
        } else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            declararVencedor("o")
        }
    
    
    
    }
    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){
    
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
    
        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
            declararVencedor("x")
        } else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            declararVencedor("o")
        }
    
    
    
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){
    
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
    
        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            declararVencedor("x")
        } else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            declararVencedor("o")
        }
    
    
    
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){
    
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
    
        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            declararVencedor("x")
        } else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            declararVencedor("o")
        }
    
    
    
    }
    //diagonais
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ){
    
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
    
        if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
            declararVencedor("x")
        } else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
            declararVencedor("o")
        }
    
    
    
    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){
    
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
    
        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
            declararVencedor("x")
        } else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
            declararVencedor("o")
        }
    
    
    
    }
    //deu velha
    let contador = 0;
    for(i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined){
            contador++
        }
        if(contador == 9){
            declararVencedor("Deu Velha!")
        }
    
    }
    
}

function declararVencedor(vencedor) {
    let pontosX = document.querySelector(".valorx");
    let pontosO = document.querySelector(".valoro");
    let msg = "";

    if(vencedor == "x") {
        pontosX.textContent = parseInt(pontosX.textContent) +1;
        msg = "O jogador 1 Venceu!!!"
    }else if(vencedor == "o") {
        pontosO.textContent = parseInt(pontosO.textContent) +1;
        msg = "O Jogador 2 venceu!!!"

    }else{
        msg = "Deu Velha!!!"
    }

    msgtxt.innerHTML = msg;
    mensagem.classList.remove("hide");

    setTimeout(function() {
        mensagem.classList.add("hide")


    },1000)

    jogador1 = 0;
    jogador2 = 0;

    //remove x,o
    let boxremove = document.querySelectorAll(".box div");

    for(i = 0; i < boxremove.length; i++){
        boxremove[i].parentNode.removeChild(boxremove[i]);


    }


}
           function jogadaIA(){
            let cloneO = o.cloneNode(true);
            cont = 0;
            prenchido = 0;

            for(i = 0; i < boxes.length; i++){
                let random = Math.floor(Math.random() *5);
                if(boxes[i].childNodes[0] == undefined){
                        if(random <= 1) {
                            boxes[i].appendChild(cloneO);
                            cont++;
                            break;
                        }
                }else{
                    prenchido++
                }
            }
            if(cont == 0 && prenchido < 9){
                 jogadaIA();
            }

            }
