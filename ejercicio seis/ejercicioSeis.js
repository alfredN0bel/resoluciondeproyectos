/* 

Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.*/

//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
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

}

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.