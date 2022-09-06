// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let final = 1;
let iterator = 1;
while(true){
    final = final * iterator
    iterator ++
    if(iterator >= 10) {
        break;
    }
}
console.log(final);