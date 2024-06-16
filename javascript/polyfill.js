const name = {
    first_name: "Meri Maharani",
    last_name: "Shri Radharani",
}
const printFullName = function (arg1, arg2, arg3, arg4) {
    console.log(this.first_name + " " + this.last_name + " " + arg1 + " " + arg2 + " " + arg3 + " " + arg4);
}
Function.prototype.myBind = function (...args1) {
    let func = this;
    params = args1.slice(1);
    return function (...args2) {
        func.apply(args1[0], [...params, ...args2]);
    }
};
const printFullNameMethod1 = printFullName.bind(name, "Pyari Radha", "Nyari Radha");
const printFullNameMethod2 = printFullName.myBind(name, "Pyari Radha", "Nyari Radha");
printFullNameMethod1("Bholi Radha", "Chatur Radha");
printFullNameMethod2("Bholi Radha", "Chatur Radha");