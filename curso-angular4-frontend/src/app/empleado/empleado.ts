export class Empleado {
    //Automaticamente actualiza los atributos
    constructor(
        public nombre:string,
        public fecNac:Date,
        public cargo:string,
        public contratado:boolean
    ){}
}