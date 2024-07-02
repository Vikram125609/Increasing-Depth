const feed = document.querySelector('#feed');
feed.addEventListener('click', (event) => {
    if (event.target.tagName = 'LI') {
        window.location.href = event.target.getAttribute('url');
    }
})

const form = document.querySelector('#form');
console.log(form)
form.addEventListener('keyup', (event) => {
    if (event.target.dataset.uppercase != undefined) {
        event.target.value = event.target.value.toUpperCase();
    }
})