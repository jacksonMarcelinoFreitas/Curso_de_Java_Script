let num = [5,8,9,2,3]
num.push(1) // adiciona ao final do vetor
num.sort() //Ordena o vetor
console.log(`Nosso vetor é o ${num}`) //Exibe o vetor
console.log(`O vetor tem ${num.length} posições`) //Mostra o tamanho do vetor
console.log(`O primeiro elemento do vetor é ${num[0]} ! `) //Mostra o elemento na posição exta 

//Exibição simples
console.log(num)

//Formatando a forma de mostrar arrays 
for(let pos = 0; pos < num.length; pos++){
    console.log(` 1 - A posição ${pos} tem o valor ${num[pos]}`)
}

//For in
for(let pos in num){
    console.log(`2 - A posição ${pos} tem o valor ${num[pos]}`)
}

//Buscar valores dentro de um vetor 
let pos = num.indexOf(8) //retorna a posição no array
if (pos == -1){
    console.log(` O valor não foi encontrado ! `)
}
else{
    console.log(`O valor 8 está na posição ${pos}`)
}

