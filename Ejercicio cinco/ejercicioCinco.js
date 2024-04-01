/* Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre
Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
 .*/
let nombre=prompt('ingrese su nombre por favor');
/*alert(nombre);*/
let edad=prompt('ingrese su edad');
/*alert (edad);*/
if(edad>=18){
    alert("¡Puedes obtener tu licencia de conducir!")
}else{
    alert ("¡ NO Puedes obtener tu licencia de conducir!")
}
