const promise1 = (state) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state) resolve('Promise1 resolved after 5 seconds');
            else reject(new Error('Promise1 rejected after 5 seconds'));
        }, 5000);
    })
};
const promise2 = (state) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state) resolve('Promise2 resolved after 2 seconds');
            else reject(new Error('Promise2 rejected after 2 seconds'));
        }, 2000);
    })
};
const promise3 = (state) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state) resolve('Promise3 resolved after 1 second');
            else reject(new Error('Promise3 rejected after 1 second'));
        }, 1000);
    })
};
const initalTime = Date.now();

// const allPromises = Promise.all([promise1(true), promise2(true), promise3(true)]);
// const allPromises = Promise.all([promise1(true), promise2(true), promise3(false)]);
// allPromises.then((result) => {
//     const finalTime = Date.now() - initalTime
//     console.log('Final Time', Math.floor(finalTime / 1000), 'seconds');
//     console.log('All Promises', result);
// }).catch((err) => {
//     console.log(err.message);
// })

// const allSetteledPromises = Promise.allSettled([promise1(true), promise2(true), promise3(true)]);
// const allSetteledPromises = Promise.allSettled([promise1(true), promise2(true), promise3(false)]);
// allSetteledPromises.then((result) => {
//     const finalTime = Date.now() - initalTime
//     console.log('Final Time', Math.floor(finalTime / 1000), 'seconds');
//     console.log(result);
// }).catch((err) => {
//     console.log(err.message);
// })

// const racePromises = Promise.race([promise1(true), promise2(true), promise3(true)]);
// const racePromises = Promise.race([promise1(true), promise2(true), promise3(false)]);
// racePromises.then((result) => {
//     const finalTime = Date.now() - initalTime
//     console.log('Final Time', Math.floor(finalTime / 1000), 'seconds');
//     console.log(result);
// }).catch((err) => {
//     console.log(err.message);
// })


// const anyPromises = Promise.any([promise1(true), promise2(true), promise3(true)]);
const anyPromises = Promise.any([promise1(true), promise2(true), promise3(false)]);
anyPromises.then((result) => {
    const finalTime = Date.now() - initalTime
    console.log('Final Time', Math.floor(finalTime / 1000), 'seconds');
    console.log(result);
}).catch((err) => {
    console.log(err.message);
})