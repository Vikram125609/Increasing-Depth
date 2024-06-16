function handlePromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 5 seconds');
        }, 5000);
    })
};

function handlePromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 5 seconds');
        }, 10000);
    })
};

const getData = async () => {
    console.log(new Date());
    const promise1 = await handlePromise1();
    console.log(new Date());
    const promise2 = await handlePromise2();
    console.log(new Date());
    console.log(promise1, promise2);
}

getData();


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise1 resolved after 5 seconds');
//     }, 20000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise2 resolved after 2 seconds');
//     }, 30000);
// });

// const getData = async () => {
//     console.log(new Date());
//     const data1 = await promise1;
//     console.log(new Date());
//     const data2 = await promise2;
//     console.log(new Date());
//     console.log(data1, data2);
// }

// getData();