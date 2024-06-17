// Función para encontrar la primera vocal en un texto
function encontrarPrimeraVocal(texto) {
    // Definir las vocales
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // Recorrer el texto
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            // Devolver la posición de la primera vocal (índice + 1 para contar desde 1)
            return { letra: texto[i], posicion: i + 1 };
        }
    }
    // Si no se encuentra ninguna vocal
    return null;
}

let texto = prompt("Introduce un texto:");

let resultado = encontrarPrimeraVocal(texto);

if (resultado) {
    // Mostrar la letra y su posición
    alert(`La primera vocal es "${resultado.letra}" y es la letra Nº${resultado.posicion}`);
} else {
    alert("No se encontraron vocales en el texto.");
}

