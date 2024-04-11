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
    }else if(numero==0){
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
function fifteenthExercise(){
let nota= 5
if (nota>=7) {
    console.log("aprobado")   
} else {
    console.log("desaprobado")
}
}
//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
function sixteenthExercise(){
    let numeroAleatorio= Math.floor(Math.random()*9999)+1;
    console.log(numeroAleatorio)
}
//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
function seventeenthExercise(){
    let numeroAleatorio= Math.floor(Math.random()*10)+1;
    console.log(numeroAleatorio)
}
//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
function eighteenthExercise(){
    let numeroAleatorio= Math.floor(Math.random()*1000)+1;
    console.log(numeroAleatorio)
}
//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
function nineteenthExercise(){
    let titulo1=document.querySelector("h1")
    titulo1.innerHTML="Hora del Desafío"
}
//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón " verifica el resultado".
function twentiethExercise(){
    console.log("El botón fue clicado")
}
//Crea una función que se ejecute cuando se haga clic en el botón "Verifica el resultado", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function twentyfirstExercise(){
    let pregunta=prompt("Mencione el nombre de una ciudad de Brasil");
    alert(`Estuve en ${pregunta} y me acordé de ti`);
}
//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Verifica el resultado".
function twentySecondExercise(){
    alert("Yo amo JS");
}
//Al hacer clic en el botón "Verifica el resultado", pide 2 números y muestra el resultado de la suma en una alerta.
function twentyThirdExercise(){
    let numero1=parseInt(prompt("ingrese el primer numero"));
    let numero2=parseInt(prompt("ingrese el segundo numero"));
    let suma=numero1 + numero2;
    alert(`el resultado es :  ${suma}`)
}
//Crear una función que muestre "¡Hola, mundo!" en la consola.
function twentyfourthExercise(){
    console.log("¡Hola, mundo!");
}
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function twentyfifthExercise(){
    let nombre=prompt("ingrese su nombre por favor")
    console.log(`"¡Hola, ${nombre}"`)
}
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function twentysixthExercise(){
    let numero=parseInt(prompt("ingrese un numero por favor"))
    let doblenumero=numero*2.
    alert(`el doble del valor ingresado es:  ${doblenumero}`)
}

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function twentyseventhExercise(){
    let numero1=parseInt(prompt("ingrese el primer numero"))
    let numero2=parseInt(prompt("ingrese el segundo numero"))
    let numero3=parseInt(prompt("ingrese el tercer numero"))

    alert(`Su promedio es ${(numero1+numero2+numero3)/3}`)
}
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function twentyeighthExercise(){
    let numero1=parseInt(prompt("ingrese el primer numero"))
    let numero2=parseInt(prompt("ingrese el segundo numero"))
 if (numero1>numero2) {
    alert(`el numero mayor es ${numero1}`)
    
 } else {
    alert (`el numero mayor es ${numero2}`)
    
 }
}
//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 function twentyninthExercise(){
    let numero1=parseInt(prompt("ingrese un numero"));
    alert(`el numero multiplicado por si mismo resulta:  ${numero1*numero1}`)
}
//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function thirtiethExercise(){
    let altura=parseFloat(prompt("ingrese un altura en metros"));
    let peso =parseFloat(prompt("ingrese un peso en kilogramos"));
      alert(` Su índice de masa corporal es de ${peso/Math.pow(altura,2)}`)
}
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function thirtyFirtsExercise(){
    let valorDeUsuario = parseFloat(prompt("ingrese un numero "))
    let total=1;
    for (let iteracion = 1; iteracion <=valorDeUsuario ; iteracion++) {
        total=total*iteracion;
        console.log(total);          
    }
    alert (" el resultado es:"  + total)
}

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function thirtySecondExercise(){
    let dolares=parseFloat(prompt("ingrese la cantidad de solares a cambiar a reales brasileños"));
    let reales=dolares*4.8;
    alert(`usted por ${dolares}  dolares obtendra ${reales}  reales brasileños`)
}
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function thirtyThirdExercise(){
    let altura=parseFloat(prompt("ingrese la altura de la sala (valor en metros)"));
    let ancho=parseFloat(prompt("ingrese el ancho de la sala (valor en metros)"));
    let perimetro= (ancho*2) + (altura*2);
    let area= ancho*altura;
    alert( `el area de la sala es de  ${area}  ${area===1? "metro" : "metros"}; y un perimetro de ${perimetro} ${perimetro===1? "metro" : "metros"}`);
}
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function thirtyFortythExercise(){
    let radio=parseFloat(prompt("ingrese el radio de la sala (valor en metros)"));
    let perimetro = 2 * Math.PI * radio;
    let area=Math.pow(radio,2) * Math.PI
    alert (`el area de la sala es de  ${area}  ${area===1? "metro cuadrado" : "metros cuadrados"}; y un perimetro de ${perimetro} ${perimetro===1? "metro cuadrado" : "metros cuadrados"}`)
}
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function thirtyFiftythExercise(){
    let mensaje="";
    let numero=parseFloat(prompt("Ingrese un numero para obtener su tabla de multiplicar"));
    for(let i=1; i<=20; i++) { 
        mensaje += `${numero} X ${i} = ${numero * i}\n`;
    }
    alert(mensaje)
}
//Crea una lista vacía llamada "listaGenerica".
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
//Crea una función que calcule el promedio de los elementos en una lista de números.
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
//Crea una función que devuelva la suma de todos los elementos en una lista.
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

