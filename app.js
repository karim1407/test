const plus = document.querySelector('.plus');
const moins = document.querySelector('.moins');
const infos = document.querySelector('.infos');
const texte = document.querySelector('.txt-taille');

let i = 14;


let augmenter = () =>{

    i += 1;
    texte.style.fontSize = `${i}px`;
    infos.textContent = `la taille est de ${i}px`;
}

let reduire = () =>{
    i -= 1;
    texte.style.fontSize = `${i}px`;
    infos.textContent = `la taille est de ${i}px`;
}

plus.addEventListener('click',augmenter);
moins.addEventListener('click',reduire);

const btn = document.querySelector('#btn');
const titre = document.querySelector('h3');
const p = document.querySelector('.go');
const form = document.querySelector('form');



form.addEventListener('submit', function getValue(e) {
    e.preventDefault();
   const input = document.querySelector('#test').value;
   titre.textContent = `Bienvenue ${input}`;
   titre.style.textTransform = 'uppercase';
})