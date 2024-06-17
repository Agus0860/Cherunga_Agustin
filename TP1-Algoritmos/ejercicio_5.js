let dato, resultado;
// Declara las variables dato y resultado
val1 = window.prompt("Introduce tu nombre", "...");
// Alamacena el valor en "val1" y pide al usuario que introduzca su nombre 
val2 = window.prompt("Introduce tu apellido", "...");
// Almacena el valor en "val2" y pide al usuario que introduzca su apellido
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
// Concatenea el nombre y apellido ingresado por el usuario usando los dos valores
document.write(resultado);
// Muestra el resultado en la página 