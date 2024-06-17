// Definición de la clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

// Definición de la clase hija Automovil que hereda de Vehiculo
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: $${this.precio}`;
    }
}

// Crear una instancia de la clase Vehiculo
const miVehiculo = new Vehiculo("Toyota", "Corolla", 2020);
console.log("Información del Vehículo:");
console.log(miVehiculo.obtenerInformacion());

// Crear una instancia de la clase Automovil
const miAutomovil = new Automovil("Fiat", "Cronos", 2020, "Rojo", 19864000);
console.log("Información del Automóvil:");
console.log(miAutomovil.obtenerInformacion());
