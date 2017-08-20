let a: boolean = false;
// a = 1;
//  let the values pass through compile-time checks
let b: number = 1;

let dd: string = '1';

let e: number[] = [1, 2, 3];

let f: [string, number] = ['1', 2];

enum g {
    hello = 0,
    world = 1,
}
enum g1 {
    hello = '3',
    world = 5,
}

function dddd(): void {
    alert('hello world')
}

// never
function never1(): never {
    throw Error('ops no return value')
}

let someValue1: any = "this is a string";

let strLength1: number = (someValue as string).length;
