const quotes =[
    {name:'a',
    quote:'a'},
    {name:'b',
    quote:'b'},
    {name:'c',
    quote:'c'},
    {name:'d',
    quote:'d'},
    {name:'e',
    quote:'e'},
]

const a = document.querySelector('#quoteBtn');
const b = document.querySelector('#quoteAuthor');
const c = document.querySelector('#quote');

a.addEventListener('click',d)
function d(){
    let num = Math.floor(Math.random()*quotes.length);
    b.innerHTML = quotes[num].name;
    c.innerHTML = quotes[num].quote;
}
