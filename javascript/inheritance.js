const Praneshveri = {
    name: "Radha",
    place: "Nikunj",
    preetam: "Man Mohan",
    bhav: "Sahachari",
    getSakhiya: function () {
        console.log(this);
        return ["Lalita", "Vishakha", "Chitra", "Sudevi", "Rangdevi", "Champaklata", "Indulekha", "Tungvidya"]
    }
}

function fun() {
    return this.getSakhiya();
}

console.log(fun.call(Praneshveri))

console.log(Praneshveri.__proto__)

const Sahachariya = ['Lalita', 'Vishakha', 'Chitra', 'Sudevi', 'Rangdevi', 'Champaklata', 'Indulekha', 'Tungvidya']
console.log(Sahachariya.__proto__)
console.log(Sahachariya.__proto__.__proto__)
console.log(Sahachariya.__proto__.__proto__.__proto__)
