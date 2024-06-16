let nameObject1 = {
    "first_name": "Meri Shri Radha",
}

let printFullName = function (arg1, arg2) {
    console.log(this.first_name + " " + arg1 + " " + arg2);
}

const methodPrintFullName = printFullName.bind(nameObject1, "Pyari", "Radha");
methodPrintFullName()