let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}
