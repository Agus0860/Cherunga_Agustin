var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// Determinar el elemento de texto con más letras
let textoMayor = "";
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === 'string' && valores[i].length > textoMayor.length) {
        textoMayor = valores[i];
    }
}

console.log("El elemento de texto con más letras es:", textoMayor);

// Imprimir los elementos de texto de menor a mayor cantidad de letras
let textos = [];
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === 'string') {
        textos.push(valores[i]);
    }
}

textos.sort((a, b) => a.length - b.length);

console.log("Elementos de texto ordenados de menor a mayor cantidad de letras:", textos);

// Operaciones matemáticas básicas con los dos elementos numéricos
let numeros = [];
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === 'number') {
        numeros.push(valores[i]);
    }
}

if (numeros.length >= 2) {
    let [num1, num2] = numeros;

    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
} else {
    console.log("No hay suficientes valores numéricos para realizar las operaciones.");
}
