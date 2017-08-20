interface IMap { 
    a: string;
}
// type contract , naming these types
let obj1: IMap = {
    a: '1',
};

function sss(a: IMap): IMap{
    return a;
}

// Optional Properties
interface IOptional1 {
    a: number;
    b?: string;
}

function sss1(arg: IOptional1): string{
   return arg.b + '';
}

// Readonly properties
interface IPoint {
    readonly x: number;
    readonly y: number;
}
let point: IPoint = {
    x: 1,
    y: 2,
}
// point.x = 23;

// Function Types
interface ISearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: ISearchFunc = function(source, subString) {
    let result = source.search(subString); 
    return result > -1;
}

// indexable types
interface IIndexType {
    [key: string]: number;
}
let inst1: IIndexType = {
    a: 1,
}

// type
type aStrType = string;
let ssss: aStrType = '1';



// extends 
interface IPeople {
    eyes: number;
}
enum LapTopEnum {
    huawei,
    lenovo,
    apple,
    IBM,
}
interface IMonkeyProgramer extends IPeople {
    laptop: LapTopEnum;
}
let slashhuang: IMonkeyProgramer = {
    laptop: LapTopEnum.apple,
    eyes: 2,
};
