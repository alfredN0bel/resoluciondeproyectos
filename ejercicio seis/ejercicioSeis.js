//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
function firstExercise(){
    let nameUser=prompt("Ingrese su nombre por favor.")
    alert(`¡Bienvenido ${nameUser}!`)
}
//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
function secondExercise(){
    let numero=prompt("ingrese un numero por favor");
    if(numero>0){
            alert("el numero ingresado es positivo.")
    }else if (numero<0){
            alert("el numero ingresao es negativo.")
    }else{
        alert("el valor ingresado no es un numero")
    }
}
//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
function thirdExercise(){
    let pregunta=prompt("Estimado usuario qué día de la semana es:  ");
    if (pregunta.toLowerCase()=="sabado"){
        alert("¡Buen fin de semana!");
    }else if(pregunta.toLowerCase()=="domingo"){
        alert("¡Buen fin de semana!");
    }else if(pregunta.toLowerCase()=="lunes"){
        alert("¡¡Buena semana!!");
    }else if(pregunta.toLowerCase()=="martes"){
        alert("¡¡Buena semana!!");
    }else if(pregunta.toLowerCase()=="miercoles"){
        alert("¡¡Buena semana!!");
    }else if(pregunta.toLowerCase()=="jueves"){
        alert("¡¡Buena semana!!");
    }else if (pregunta.toLowerCase()=="viernes"){
        alert("¡¡Buena semana!!");
    }else{
        alert("el valor ingresado no es un dia de la semana ")

    }}
//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
function fourthExercise(){
    let bonus=prompt("ingrese cuantos puntos bitcoin usted tiene");
    let saldo=bonus*63*63;
    alert(`su saldo actual es de:${saldo}`);
}
//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
function fifthExercise(){
    let numeroDePuntuacion=prompt("ingrese cuantos puntos tiene");

    if (numeroDePuntuacion>=100){
        alert("¡Felicidades, has ganado!")
    }
    else{
        alert("Intentalo nuevamente para ganar.")
    }
}
// SEGUNDO GRUPO DE EJERCICIOS.
// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
function sixthExercise(){
    let mensaje="bienvenida";
    console.log(mensaje)
}
//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
function seventhExercise(){
    let nombre= "Alfredo";
    console.log(`"¡Hola,${nombre}"`)
}
//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
function eighthExercise(){
    let nombre="Alfredo"
    alert(`¡Hola,${nombre}!`);
}

//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
function ninthExercise(){
    let pregunta=prompt("¿Cuál es el lenguaje de programación que más te gusta?.")
    console.log(pregunta)
}

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
function tenthExercise(){
    let valor1 = 99990;
    let valor2 = 152533;
    let resultado = valor1+valor2;
    console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`)
    

}

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
function eleventhExercise(){
    let valor1 = 8526790;
    let valor2 = 9152533;
    let resultado = valor1-valor2;
    console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultado}.`)

}

//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
function twelfthExercise(){
    let edadDeUsuario=prompt("Ingrese su edad")
    if(edadDeUsuario<18){
        console.log("Usted es menor de Edad")
    } else if(edadDeUsuario>=18){
        console.log("Usted puede utilizar el servicio solicitado")
    } else{
        console.log("el valor ingresado no coincide con lo solicitado")
    }
}   


//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
function thirteenth(){
    let numero = parseInt(prompt("ingrese un numero por favor"))
    if (numero>0) {
        alert("el numero ingresado es positivo")        
    } else if (numero<0){
        alert("el numero ingresado es negativo")
    }else if(numero=0){
        alert("el numero ingresado es cero")
    }else{
        alert("el valor ingresado no es un numero")
    }
}

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
function fourteenthExercise(){
    let contador=1
    while(contador<=10){
        console.log(contador)
        contador=contador+1
        
    }
}

//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.