//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

function firstExercise(){
    let contador =1;
    while(contador<=10){
        alert(`Ejecutando la iteración ${contador}`)
        console.log(`Ejecutando la iteración ${contador}`)
        contador=contador+1;
    }
}

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
function secondExercise(){
    let contador =10;
    while(contador>=0){
        alert(`Ejecutando la iteración ${contador}`)
        console.log(`Ejecutando la iteración ${contador}`)
        contador=contador-1;
    }
}
//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
function thirdExercise(){
    let contador=0;
    let numeroUsuario=prompt("Ingrese un numero para realizar cuenta progresiva");
    while(contador<=numeroUsuario){
        alert(`contado progresivamente${contador}`)
        console.log(`contado progresivamente ${contador}`)
        contador=contador+1;
    }

}