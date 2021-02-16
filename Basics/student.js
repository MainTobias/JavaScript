student = {
    name: 'Tobias',
    age: 16,
    n: 7,
    print: function (){
        console.log(`The student ${this.name} is ${this.age} years old and has a catalog number of ${this.n}.`)
    }
}
student.print()
delete student.n
student.print()