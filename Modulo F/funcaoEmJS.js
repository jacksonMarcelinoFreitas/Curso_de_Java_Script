function parImpar(n){
    if (n%2 == 0){
        return 'Par !'
    }
    else{
        return 'Impar !'
    }
}
console.log(parImpar(223)) //1 - Forma de mostrar

//--------------------------------------------------------------
let res = parImpar(4) 
console.log(res) // 2 - Forma de mostrar

//--------------------------------------------------------------
function soma(n1=0, n2=0){ //predefinino valores dos parâmetros
    return n1 + n2
}

console.log(soma(2,5)) //Chamada com parâmetro

//---------------------------------------------------------------
let v = function(x){
    return x*2
}
console.log(v(2))

//----------------------------------------------------------------

function fatorial(n){
    let fat=1
    for(let cont = n; cont > 1; cont--){
        fat *= cont
    }
    return fat
}
console.log(fatorial(5))

//Função recursiva (chama a si mesma) ---------------------------
function fatorial2(n){
    if (n == 1){
        return 1
    }
    else{
        return n * fatorial2(n-1)
    }
}
console.log(fatorial2(5))