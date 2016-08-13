var Test = (function () {
    function Test() {
        var _this = this;
        this.hello = 'hello';
        this.t = 'hello';
        this.q = function () {
            _this.hello = 'q';
        };
        this.t = 'd';
    }
    Test.prototype.ss = function () {
    };
    return Test;
}());
var te = new Test();
te.ss();
//# sourceMappingURL=class.js.map