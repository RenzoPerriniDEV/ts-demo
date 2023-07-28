import { Curso } from "./curso";

export class Estudiante {

    // Propiedades de clase
    nombre: string;
    //Apellidos es opcional con ?
    apellidos?:string;
    cursos: Curso[];

    private DNI: string = '12123444';

    // Constructor
    constructor(nombre: string,  cursos: Curso[], apellidos?:string) {
        //Inicializamos las propiedades
        this.nombre = nombre;
        // Si llega apellidos le asignamos apellidos sino undefined.
        this.apellidos = apellidos?apellidos : undefined;
        this.cursos = cursos;
    }

    // Getter
    get horasEstudiadas (): number {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += curso.horas;
        })
        return horasEstudiadas;
    }
   get getDni (): string {
       return this.DNI;
   }

   // Setter
   set setDni (dni: string) {
        this.DNI = dni;
   }

}
