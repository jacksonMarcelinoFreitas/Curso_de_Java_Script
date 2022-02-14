var vel= 50
console.log(` A velocidade do seu carro é ${vel} Km/h`)

if(vel > 60){
    console.log(` Você ultrapassou a velocidade permitida, MULTADO!`)
}
console.log(` Dirija sempre usando cinto de segurança`)

//_________________________________________________________________________

var pais = 'EUA'
console.log(`Vivendo em ${pais}`)

if(pais == 'Brasil'){
    console.log('Você é brasileiro!')
}
else{
    console.log(`Você é estrangeiro!`)
}

//_________________________________________________________________________
function calcular(){
    var txtv = 90
    var vel = Number(txtv.Value)
    
    res.innerHTML = `<p>Sua velocidade atual é de ${vel} km/h </p>`
    if(vel > 60){
        res.innerHTML += `<p> Você está multado por excesso de velocidade</p>`
    }
    res.innerHTML = `<p>Dirija sempre com cinto de segurança!</p>`
    
}
