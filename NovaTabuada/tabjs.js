const G = document.getElementById('gerar')
const gerar = document.addEventListener('click', gerartab)
var res = document.getElementById('tab')
function gerartab(){
    let N = document.getElementById('num');
    
    if(N.value.length <=""){
        alert("Por Favor Didite um Número antes de Gerar")

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