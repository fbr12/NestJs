class Persona {

    constructor(private age:number, private name:string){}

    getSummary(){
        return `my name is ${this.name}, and I'm ${this.age} years old`
    }
}

const fabri = new Persona(19, 'fabri')