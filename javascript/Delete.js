const object = {
    name: 'Pyari Radha',
    age: 23,
    getInfoFunction: function get() {
        console.log(this);
    },
    getInfoArrowFunction: () => { 
        console.log(this);
    }
}
function getData() {
    console.log(this)
    this.getInfoFunction();
    this.getInfoArrowFunction();
}

getData.call(object);
