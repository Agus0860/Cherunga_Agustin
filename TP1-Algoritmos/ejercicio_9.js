// Función para solicitar una nota al usuario 
function pedirNota() {
    let nota;
    do {
        nota = parseInt(prompt("Introduce una nota (natural menor que 11):"));
        if (isNaN(nota) || nota < 0 || nota >= 11) {
            alert("Nota inválida. Debe ser un número natural menor que 11.");
        }
    } while (isNaN(nota) || nota < 0 || nota >= 11);
    return nota;
}

// Solicitar 5 notas al usuario
let notas = [];
for (let i = 0; i < 5; i++) {
    notas.push(pedirNota());
}

// Calcular el promedio
let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}
let promedio = suma / notas.length;


// Determinar el estado del alumno
let estado;
if (promedio <= 5.99) {
    estado = "Reprobado";
} else if (promedio <= 8.99) {
    estado = "Aprobado";
} else {
    estado = "Sobresaliente";
}

// Mostrar el resultado
alert(`El promedio es ${promedio.toFixed(2)} | Estado: ${estado}`);
