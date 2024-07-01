const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click', () => { 
    console.log('Grandparent Clicked');
}, true);
parent.addEventListener('click', () => { 
    console.log('Parent Clicked');
}, false);
child.addEventListener('click', () => { 
    console.log('Child Clicked');
}, true);

