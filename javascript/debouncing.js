const getData = (arg1, arg2, value) => {
    console.log(arg1, arg2, value);
};
const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay)
        console.log(timer)
    }
}
const betterFunction = debounce(getData, 1000);