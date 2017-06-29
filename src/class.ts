/**
 * Created by slashhuang on 16/8/14.
 */
interface H{
    t:string;
    q():void
}
class Test implements H{
    private hello:string='hello';
    t:string='hello';
    ss(){

    }
    q = ()=>{
        this.hello='q';
    };
    constructor(){
     this.t='d';
     this.hello = 'world';
    }
}

let te: H = new Test();
(<Test>te).ss()