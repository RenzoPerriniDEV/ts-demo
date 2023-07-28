import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils'
import { Curso } from './models/curso';
import { Estudiante } from './models/Estudiante';
import { LISTA_CURSOS } from './mock/cursos.mock';

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
variosParams("Renzo" ); // Renzo tiene 18 años
variosParams("Martin", "San Jose"); // Martin San Jose tiene 18 años
variosParams("Martin", undefined, 30); // Martin tiene 18 años
variosParams("Martin", "San Jose", 30); // Martin San Jose tiene 30 años
//variosParams(nombre="Renzo", apellidos="Lopez", edad=30); // Martin Lopez tiene 30 años

//Puede recibir un parámetro en este caso de tipo string o number
function ejemploVariosTipos(a: string | number) {
    if(typeof(a) == 'string') {
        console.log("A es un string");
    } else if (typeof(a) == 'number') {
        console.log("A es un number");
    } else {
        console.log("A no es un string ni tampoco un number");
        throw Error("A no es un string ni un number");
    }
}

ejemploVariosTipos("Hola");
ejemploVariosTipos(3);


// Funciones anónimas
let ejemploArrow = () => {}


// Retorno de valores. :string -> indica que solo devuelve string
// : string | number: puede retornar string o number
/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo
 */
function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`; 
}

const nombreCompleto = ejemploReturn("Renzo", "Perrini");
console.log(nombreCompleto);
console.log(ejemploReturn("Renzo", "Perrini"));


// ...nombres: de esta forma se indica que la funcion puede recibir varios param o no recibir nada
function ejemploMultiParam(...nombres: string[]): void {
    nombres.forEach((nombre) => {
            console.log(nombre);
    });
}
ejemploMultiParam("Renzo", "Pepe", "Juan");


const lista = ["Alberto", "Pepe"];
ejemploMultiParam(...lista);

function ejemploParamLista(nombres: string[]) {
    nombres.forEach((nombre) => {
            console.log(nombre);
    });
}

//Se pasa directamente una lista. La función espera una lista concreta.
ejemploParamLista(lista);


// ARROW Functions

// Objeto con propiedades para ser instanciada
type Empleado {
    nombre: string
    apellidos: string
    edad: number
}

let empleadoRenzo: Empleado = {
    nombre: "Renzo",
    apellidos: "Perrini",
    edad: 32
}

//Retorno directo
const mostrarEmpleado = (empleado: Empleado):string => `${empleado.nombre} tiene ${empleado.edad} años`

//Llamada a la función. Pasa por parámetros objeto creado
mostrarEmpleado(empleadoRenzo)

// En una funcion las {} quiere decir que podemos emplear varias instrucciones
const datosEmpleado =  (empleado: Empleado):string => {
    if(empleado.edad > 70) {
        return `Empleado ${empleado.nombre} está en edad de jubilarse`
    } else {
        return `Empleado ${empleado.nombre} está en edad laboral`
    }
}

datosEmpleado(empleadoRenzo);

// Función anónima: función embebida dentro de una función
const obtenerSalario = (empleado: Empleado, cobrar: () => void) => {
    if(empleado.edad > 70) {
        return 
    } else {
        cobrar() //Calback a ejecutar
    }
}

const cobrarEmpleado = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
}

obtenerSalario(empleadoRenzo, () => cobrarEmpleado);


// Funciones asíncronas: ejecutar tareas que demoren cierto tiempo. Se pueden ejecutar en un determinado momento.

async function ejemploAsync(): Promise<string> {
    // await: esperan para completar una tarea y así seguir a la siguiente línea. Hace algo que demora x tiempo antes de seguir con la siguiente linea.
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return "Completado"
}

// Acceder al return "Completado" de la función a traves de la promesa
ejemploAsync().then((respuesta) => {
    console.log("Respuesta", respuesta);
}).catch((error) => {
    console.log("Hubo un eror", error);
}).finally(() => "Todo ha terminado");



// Funciones generadoras

function* ejemploGenerator() {    
    // yield: sirve para emitir un nuevo valor o ejecutar una función
    
    let index = 0;

    while (index < 5) {
        // Emitimos un valor incrementado
        yield index++;
    }
}

// Guardamos la función generadora en una variable. (Acá no se ejecuta)

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos
console.log(generadora.next().value) // muestra 0
console.log(generadora.next().value) // muestra 1
console.log(generadora.next().value) // muestra 2
console.log(generadora.next().value) // muestra 3


// Worker: varias funciones generadoras

function* watcher(valor: number) {
    yield valor; // emitimos el valor inicial
    yield* worker(valor); // llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4; // Emitimos el valor final + 4 
}

function* worker(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // Muestra 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // Muestra 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // Muestra 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // Muestra 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // Muestra valor + 4 (lo ha hecho el watcher)


// Sobrecarga de funciones

// Puede recibir string o number
function mostrarError(error: string | number): void {
    console.log("Ha habido un error:", error);
}


// Persistencia, almacenamiento de datos, token, sesiones, cookies, información del estado de la aplicación para no estar consultando siempre a un endpoint

// 1. Localstorage -> Almacena los datos en el navegador (no se eleiminan automáticamente)
// 2. SessionStorage -> La diferencia radica en la sesión de navegador. Es decir, los datos se persisten en la sesón del navegador
// 3. Cookies -> Tienen fecha de caducidad y también tienen un ámbito de URL


// LocalStorage
// function guardarEnLocalStorage() :void {
//     localStorage.set("Nombre", "Renzo");
// }

// function leerLocalStorage() :void {
//     let nombre = localStorage.get("Nombre");
// }


/** COOKIES */

const cookieOptions = {
    name: "usuario", // string,
    value: "Renzo", // string,
    maxAge: 10 * 60, // optional number (value in seconds), // Tiempo que estaría guardado
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
   
  };

// Seteamos la Cookie
setCookie(cookieOptions);

// Leer una cookie
let cookieLeida = getCookieValue("usuario");

// Eliminamos la Cookie
deleteCookie("usuario");

// Eliminar todas las Cookies
deleteAllCookies();




// Clase Temporizador

class Temporizador {

    public terminar?: (tiempo: number) => void;

    public empezar(): void {

        setTimeout(() => {
            
            // Comprobamos que exista la función terminar como callback
            if(!this.terminar) return;
            
            //Cuando haya pasado el tiempo, se ejecutará la función terminar
            this.terminar(Date.now());
        }, 10000);
    }
}

const miTemporizador: Temporizador = new Temporizador();

// Definimos la función del callback a ejecutar cuando termine el tiempo

miTemporizador.terminar = (tiempo: number) => {
    console.log("Hemos terminado la tarea en: ", tiempo);
}

// Lanzamos el temporizador
miTemporizador.empezar(); // Se inicia el timeout y cuando termine, se ejecuta la función terminar

// setInterval(() => console.log("Tic"), 1000) // Imprimir "Tic" cada un segundo por consola.

// Eliminar la ejecución de la función
delete miTemporizador.terminar;


// Cuando haga click, se ejecuta la función anónima
// document.getElmentById("#btn-login").addEventListener('click', () => {
//     console.log("Has hecho click en el login");
// })


/**  POO */

// Instancia de curso

const cursoTs = new Curso("TypeScript", 15);
const cursoJs = new Curso("JavaScript", 20);

const listaCursos: Curso[] = [];

listaCursos.push(cursoTs, cursoJs); // Lista con los cursos


// Usamos el MOCK para cursos
const listaCursosMock: Curso[] = LISTA_CURSOS;

// Instancia de estudiante

const renzo = new Estudiante("Renzo", listaCursos, "Renzo Perrini");

// Iteramos por cada uno de los cursos
console.log(`${renzo.nombre} estudia: `);
renzo.cursos.forEach((curso) => {
    console.log(` - ${curso.nombre} (${curso.horas} horas)`);
})

const cursoAngular = new Curso("Angular", 40);
renzo.cursos.push(cursoAngular);

// Obtener horas estudiadas
renzo.horasEstudiadas; // number

// Setter
renzo.setDni = "54444455";

// Saber la instancia de un objeto/vatiable

// - typeOf
// - instanceOf
