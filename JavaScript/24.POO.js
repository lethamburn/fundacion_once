//Programación Orientada a Objetos

const objeto = {
    name: "Objeto",
    price: 5,
    new: true,
    action: () => {
        console.log("Hola soy la acción")
    }
}

objeto.action()

for(const clave in objeto){
    console.log(objeto[clave]
    )
}

//Funciones constructoras
function Car(marca, color, puertas, modelo){
    this.marca = marca;
    this.color = color;
    this.puertas = puertas;
    this.modelo = modelo;
    this.ruedas = 4
    this.arrancar = () => {console.log(this.modelo + " ha arrancado")}
    this.frenar = () => {console.log(this.modelo + " ha parado.")}
}

const seatpanda = new Car("Seat", "morado", 3, "Panda")
console.log(seatpanda)
seatpanda.arrancar()
const camaro = new Car("Chevrolet", "amarillo", 3, "Camaro");
camaro.arrancar()
console.log(camaro)

