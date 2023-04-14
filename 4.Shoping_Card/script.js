let allTotal = 0;
function addToCart(element) {
    //uzimamo parent element kako bi pristupili ostalim podacima kao sto su ime,cena,value
    let mainEl = element.closest('.single-item')
    let price = mainEl.querySelector('.price').innerText
    let name = mainEl.querySelector('h3').innerText
    //uzimamo vrednost sa inputa
    let quantity = mainEl.querySelector('input').value

    // Sad cemo da ga dodamo u drugi conatiner odnosno korpu
    let cartItems = document.querySelector('.cart-items');

     if (parseInt(quantity)>0) {

        price = price.substring(1);
        price = parseInt(price)
        quantity = parseInt(quantity)

        let total = price * quantity;

        

        allTotal += total
        
        console.log(allTotal)

        cartItems.innerHTML += `<div class = "cart-singel-item">
                                 <h3>${name}</h3>
                                 <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                 <button onclick = 'removeFromCart(this)' class = 'reomve-item'>Ukloni</button>
                                </div>`


        document.querySelector('.total').innerText = `Totoal: ${allTotal}`                    
        element.innerText = 'Dodato'
        element.setAttribute('disabled', 'true')


     } else {
        alert('Molimo vas odaberite kolicinu')
     }

    
    

    //console.log(quantity)
    //// ovo let inout je u sustini isto sto i let quntity
    // let input = element.previousElementSibling.value
    // console.log(mainEl)
    
}

function removeFromCart(element) {
   let mainEl = element.closest('.cart-singel-item')
   let price = mainEl.querySelector('p span').innerText
   price = parseInt(price)
   allTotal -= price
   document.querySelector
   
   document.querySelector('.total').innerText = `Totoal: ${allTotal}`  
   mainEl.remove()
   element.setAttribute('enabled', 'true')                  

}