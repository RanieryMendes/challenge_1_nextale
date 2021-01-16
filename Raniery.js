
//Imports class person and creates Raniery class which inherits Person

const person = require('./Person')

class Raniery extends person {

    constructor(gender){
        super(gender)
       
     }    

    //setter methods 

    setCollege(college){
        this.college = college
    }

    setCellphone(cellphone){
        this.cellphone = cellphone
    }

    setMajor(major){
        this.major = major
    }

    //"getter method that override presentMyself from Parent(Person) class"

    presentMyself(){
        
        console.log(`Hi! I'm ${this.name} and I'm ${this.age}. Also, I'm a ${this.gender} and my pronouns are: ${this.pronouns}.`)
        console.log(`By the way, I go to ${this.college} and I major in ${this.major}. If you wanna chat, just text me at ${this.cellphone}.`)
        
    }
    




}


module.exports= Raniery