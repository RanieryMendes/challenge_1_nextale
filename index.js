//main file

//import classes
const Raniery = require('./Raniery')
const Person = require('./Person')



//Object created using class Person. It implements the functionalities of that class.
let jet = new Person('female')

//call setters
jet.cpf='200.300.400-32'
jet.setName("Jet")
jet.setAge(21)
jet.setPronouns("she/her")
jet.setFavoriteDay("Sunday")
jet.setHairColor("Light Brown")

//call "getters"
jet.sayHello()
jet.tellAge()
jet.presentMyself()

console.log("\n")

//Object created using class Raniery. It implements the functionalities of that class as well as of class Person since Raniery extends Person.

let student = new Raniery('male')

//call setters
student.setName("Raniery")
student.setPronouns("he/him/his")
student.setCellphone(3369955710)
student.setCollege("Wake Forest University")
student.setMajor("Computer Science and Poltics & International Affairs")
student.setAge(21)

//call "getters"
student.sayHello()
student.tellGender()
student.tellAge()
student.presentMyself()