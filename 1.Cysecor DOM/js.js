// let brend = document.getElementsByTagName('span')

// for (let auto of brend) {
//     console.log(auto.innerText)
// }


// console.log('------------------------------------------')



// let modeli = document.getElementsByClassName('automobil-model')
// for (let model of modeli) {
//     console.log(model.innerText)
// }



// console.log('------------------------------------------')


// let najbolji = document.querySelector('#tekst')
// console.log(najbolji.innerText)


let recenica = document.querySelector('#tekst');
recenica.remove();


let novi_el = document.createElement('div');
novi_el.classList ='novi-element';
novi_el.innerHTML = '<hr> Pozdrav'
//novi_el.innerText = 'Pozdrav'


let body = document.querySelector('body');
body.appendChild(novi_el);

console.log(novi_el);




