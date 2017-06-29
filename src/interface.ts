interface Person {
    firstName: string;
    lastName: string;
}
class Student implements Person{
    fullName: string;
    firstName: "hello";
    lastName: "world";
    constructor(firstName: string, middleInitial: string, lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person : Student) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user= new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
