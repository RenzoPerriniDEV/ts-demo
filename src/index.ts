console.log("Hello dawg");

/*
********** Declaración de variables
* BuiltIn Types: number, string, boolean, void, null y undefined
*/

var nombre = 'Renzo'

//Variable de ambito local para funciones por ej.
let email = "renzo@hotmail.com";

//Constante
const PI = 3.14;

//Constante con tipo de dato
const PI_const: number = 3.14;

//Variable con tipo de dato
var calle: string = 'Av. Cabildo 1234';

//Variable con cualquier tipo de dato
var whatever: any = 'Cualquier cosa';

//Boolean sin asignación
var error: boolean;
error = false;

console.log("Hola " + nombre);
console.log("Hola ", nombre, "XD");
console.log(`Variable concatenada dentro de string, ${nombre} :)` );
console.log(`Email de ${nombre} es ${email}`);

// Instanciación múltiple de variables

let a:string,b:boolean,c:number; //Instancia 3 variables sin valor y tipo de dato fijo
//Asignación de valores
a = "Typescript";
b=true;
c = 8.9;

// Lista de string
let listaTares: string[] = ["Tarea 1", "Tarea 2"];

//Lista con 'Any'
let valores = [false, "Hola", true, 56]

//Lista con diferentes tipos de datos
let valores_tipo_dato: (string | number | boolean)[] = [false, "Hola", true, 56];

//Enumerados. El valor puede ser de cualquier tipo. Por defecto el valor es númerico 
//y es incremental para los siguientes: Completado es igual a 1, incompleto 2, etc. 
//Si se asigna otro numero, serán incremental también para los siguientes
enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendinte" = "P"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

//Tipo de dato con un enum previamente creado y un valor del mismo
let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

// Interfaces (Es como una clase y propiedades)

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// Podemos crear variables que sigan la interface Tarea. (Es como instanciar un objeto)

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendinte,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`);

// Asignación múltiples de variables

let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
}

// Declaración 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

// **** Factor Spread (Propagación)

// Propagación en variables
let {titulo, estado, urgencia} = miTarea;


// Propagación en listas
let listaCompraLunes: string[] = ["Leche", "Patatas"]
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"];
//Asignar a una lista otras dos listas
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]

// Propagación en objetos

let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer12312313"
}

//Cambiar un valor por propagación
let nuevoEstado = {
    ...estadoApp,
    session: 4
}


// Types de Typescript

type Producto = {
    precio: number,
    nombre: string,
    year: number
}

let coche: Producto = {
    nombre: "Audio",
    precio: 45000,
    year: 2010
}

console.log(`Coche: ${coche.nombre}`);

/*
*** Condicionales y estructuras de control
*/


//Operadores ternarios
console.log(coche.year < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`)

// Los boolean, void, null y undefined se tratan siempre como false sino son true

// If - else
if(error) {
  console.log("Hay un error");
} else {
  console.log("No hay un error");
}

// If - else if - else 
if(coche.year === 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`);
} else if (coche.year === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
} else {
    console.log(`Coche: ${coche.nombre} es nuevo`); 
}

// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea está completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea no está completada");
        break;
    case Estados.Pendinte:
        console.log("La tarea no está pendiente");
        break;
    default:
        console.log("La tarea está sin asignación");
        break;
}

// Bucles

let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendinte,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Incompleto,
        urgencia: 15
    }
]

// forEach

listaTareasNueva.forEach(
    //Por cada uno de los elementos de tarea ejecutamos una función
    (tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre} `);  
    }
);

// for

for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}

// For in: para objetos, cadena de textos

/*
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/

// While

while (tarea1.estado !== Estados.Completado) {    
    if(tarea1.urgencia == 20) {
        tarea1.estado = Estados.Completado;
        break;
    }else{
        tarea1.urgencia ++;
    }
}

// Do while (Se ejecuta al menos una vez)

do {
    tarea1.urgencia ++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);

// Funciones

/**
 * Función que saluda por consola
 */
function saludar() {

    let nombre = "Martin"
    console.log (`Hola ${nombre}`);
}

// Invocación de la función
saludar();

/**
 * Función que muestra un saludo por consolar a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre: string) {
    console.log (`Hola ${nombre}`);
}
const persona = "Renzo"
saludarPersona("Renzo");
saludarPersona(persona);

/**
 * Función que muestra un saludo por consolar a una persona
 * @param nombre Nombre de la persona a saludar, por defector será Pepe
 */
function despedirPersona(nombre: string = "Pepe") {
    console.log (`Adios ${nombre}`);
}

despedirPersona(); // Muestra por defecto "Adios Pepe"
despedirPersona("Juan");

/**
 * Función donde el parametro es opcional. Si recibe el nombre lo mostrará, sino muestra solo "Adios"
 * @param nombre 
 */
function despedidaOpcional(nombre?: string) {
    if(nombre) {
        console.log (`Adios ${nombre}`);
    } else {
        console.log (`Adios`);
    }
}

despedidaOpcional(); // Adios
despedidaOpcional("Juanjo"); // Adios Juanjo 

/**
 * Función con múltiples parámetros y distintas maneras de envierselos
 * @param nombre 
 * @param apellidos 
 * @param edad 
 */

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
    if(apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    } else {
        console.log(`${nombre} tiene ${edad} años`);
    }    
}

variosParams("Martin" ); // Martin tiene 18 años
variosParams("Martin", "San Jose"); // Martin San Jose tiene 18 años
variosParams("Martin", undefined, 30); // Martin tiene 18 años
variosParams("Martin", "San Jose", 30); // Martin San Jose tiene 30 años
//variosParams(nombre="Renzo", apellidos="Lopez", edad=30); // Martin Lopez tiene 30 años

// Sobre carga de funciones


// Funciones asíncronas


// Funciones generadores