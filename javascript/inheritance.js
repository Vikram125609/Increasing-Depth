const Praneshveri = {
    name: "Radha",
    place: "Nikunj",
    preetam: "Man Mohan",
    bhav: "Sahachari",
    getSakhiya: function () {
        return ["Lalita", "Vishakha", "Chitra", "Sudevi", "Rangdevi", "Champaklata", "Indulekha", "Tungvidya"]
    }
}

// console.log(Praneshveri.getSakhiya());
// Here we didn't define the method toString but we are able to access because of Prototype 
// console.log(Praneshveri.toString());

console.log(Praneshveri.__proto__);