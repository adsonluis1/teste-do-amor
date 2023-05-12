
function enviar(){
var nome = document.getElementById('inome')
var tela = document.getElementById('tela')

    if(nome != 'Anne Rafaelle Matias Dos Santos'){
        p2.style.display= 'block'
        p1.style.display= 'none'

    }else{
        tela.innerHTML= 'vc nn é meu xuxuzinho [PERIGO]'
    }
}

function enviar2(){
    var tela2 = document.getElementById('tela2')
    var numero = document.getElementById('amor')
    var num = numero.value

    if(num < 20){
        tela2.innerHTML= 'oce me odeia ??'
    }else if(num <50){
        tela2.innerHTML= 'que amor mixuruquinha, tente dnv'
    }else if(num <100){
        tela2.innerHTML= 'oce quer casar assim ?? MELHORE MUIE'
    }else if(num == 100){
        tela2.innerHTML= 'esperava mais de vc cara...'
    }else if(num < 150){
        tela2.innerHTML= 'achei que fosse maior'
    }else if( num < 500){
        tela2.innerHTML= 'ja vi muie amando mais'
    }else if(num < 1000){
        tela2.innerHTML= 'é um valor consideravel masssss, ainda está baixo'
    }else if (num < 10000){
        tela2.innerHTML= 'eu ainda amo mais'
    }else{
        tela2.innerHTML= 'hmm parabens vc ama bastante'
        e1.style.display= 'none'
        e2.style.display= 'block'
    }
}

function enviar3(){
    presente.style.display= 'block'
    tela2.innerHTML= ''
    e2.style.display= 'none'
}