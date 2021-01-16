class Person {

    constructor(gender){
        this.gender = gender
       
    }

    //setter methods
    setName(name) {
        this.name = name
    }

    setHairColor(color){
        this.hairColor = color
    }

    setAge(age){
        this.age = age
    }

    setFavoriteDay(day){
        this.favorite_day = day
    }

    setPronouns(pronouns){
        this.pronouns = pronouns
    }



    //'getter' methods

    sayHello(){
        console.log(`Hello Word from ${this.name}!`)
    }


    tellAge(){
        console.log(`I am ${this.age} years old.`)
    }

    tellGender(){
        console.log(`I am ${this.gender}.`)
    }


    presentMyself(){
        console.log(`Hi! I'm ${this.name} and I'm ${this.age}. Also, I'm a ${this.gender} and my pronouns are: ${this.pronouns}.`)
        
        console.log(`A few things about me are that my favorite day of the week is ${this.favorite_day} and my hair is ${this.hairColor}.`)
    }


}



module.exports = Person

