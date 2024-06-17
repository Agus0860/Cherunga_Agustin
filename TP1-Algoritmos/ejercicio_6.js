Meses = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',]
// Declarado el array con los meses del año

let Numero = prompt("Ingresa un número del 1 al 12 para sacar el mes que desea: ")
// Pide al usuario que ingrese un número del 1 al 12 represetando a los meses del año

for (let i = 0; i < Meses.length; i++) {
    // Comprueba si el número ingresado corresponde al índice del mes actual
    if (Numero === String(i + 1)) {
    alert(`El mes es: ${Meses[i]}`);
      break; // Sale del bucle una vez que se encuentra el mes correspondiente
    }
}