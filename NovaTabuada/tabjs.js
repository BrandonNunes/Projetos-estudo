const G = document.getElementById('gerar')
const gerar = document.addEventListener('click', gerartab)
var res = document.getElementById('tab')


function gerartab(){
    var N = document.getElementById('num');
    const msg = document.querySelector("#msg")
    if(N.value == 0){
       alert("Digite algo antes de começar")

    }else{
        let Numero = Number(N.value)
        let i = 1;
        res.innerHTML = ""
        while(i <= 10){
            let item = document.createElement('option')
            item.text = `${Numero} X ${i} = ${Numero*i}`
            res.appendChild(item)
            i++
        }

    }
    
}