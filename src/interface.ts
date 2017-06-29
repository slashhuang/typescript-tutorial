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

const user: Person= new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(<Student>user);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
        color: config.color || '',
        area: config.width || 1,
    };
}
// type assertion
let squareOptions = <SquareConfig>{ colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);


