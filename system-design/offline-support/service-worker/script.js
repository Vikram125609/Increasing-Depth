// As soon as the page get loaded we need to register our service worker
// But to register service worker we need to check weather it is supported by the browser or not

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js', { scope: './' })
        .then(function () {
            console.log('Service Worker Registered');
        })
        .catch(function (err) {
            console.log(err);
        });
}

fetch('https://api.github.com/users/Vikram125609')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        document.getElementById('textarea').value = JSON.stringify(data, undefined, 4);
    })