const nav = document.querySelector('#main-nav');
const body = document.querySelector('body');
const header = document.querySelector('.main-header');
const navButton = document.querySelector('.fa-bars');
const catName = [...document.querySelectorAll('a')];
const catCard = document.querySelector('.cat-card');

const title = document.createElement('h2');
const img = document.createElement('img');
const count = document.createElement('h3');

//Data related to the cat content
const cats = [
    {
        name: 'Amsterdam',
        img: 'images/amsterdam.jpg',
        count: 0
    },
    {
        name: 'Kyoto',
        img: 'images/kyoto.jpg',
        count:0,
    },
    {
        name: 'Skylark',
        img: 'images/skylark.jpg',
        count: 0
    },
    {
        name: 'Brussel',
        img: 'images/brussel.jpg',
        count: 0,
    },
    {
        name: 'Koslo',
        img: 'images/koslo.jpg',
        count: 0,
    },
];

// Off canvas navigation layout
navButton.addEventListener('click', (e) => {
    body.classList.toggle('open');
    e.stopPropagation();
});

// Show the cat card
function showCat(clickedCat) {
    cats.map((cat) => {
        if(clickedCat === cat.name) {
            title.textContent = cat.name;
            img.setAttribute('src', `${cat.img}`);
            count.textContent = cat.count;
        }
        catCard.appendChild(title);
        catCard.appendChild(img);
        catCard.appendChild(count);
    });
}

function removeCat() {
    catCard.remove();
}

// Add event listeners to the links
catName.map((cat) => {
    cat.addEventListener('click', (e) => {
        e.preventDefault();
        const clickedCat = cat.textContent;
        showCat(clickedCat);
    });
});

// Increment the counter on the cats
catCard.addEventListener('click', (e) => {
    const title = e.target.parentElement.firstElementChild.textContent;
    let counter = e.target.parentElement.lastChild;
    cats.map((cat) => {
        if(cat.name === title) {
            cat.count = cat.count + 1;
            counter.innerHTML = cat.count;
        }
    })
});