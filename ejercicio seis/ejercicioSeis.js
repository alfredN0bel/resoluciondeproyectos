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