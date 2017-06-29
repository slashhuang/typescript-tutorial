let notSure:any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean


let notSure1: any = 4;
notSure1.ifItExists(); // okay, ifItExists might exist at runtime
notSure1.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure1: any = 4;
prettySure1.toFixed();
