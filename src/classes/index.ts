class People {
    name: string
    constructor(name: string) {
        this.name = name;
    }
}
class A extends People {
    a: string;
    constructor() {
        super('slashhuang');
        this.a = '1';
    }
    hello(): string {
        return this.a;
    }
}
// class 不仅可以描述数据结构,同时他还有方法、属性等等的封装
let instA = new A();
instA.a;
instA.name;

