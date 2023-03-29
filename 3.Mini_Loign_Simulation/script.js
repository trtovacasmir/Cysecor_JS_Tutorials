function validacija() {
    ////let gl_div = document.querySelector('.glavni-div')
    ////gl_div.innerHTML = '<span>kliknite na ovaj link: <a href = "https://google.com/"> klik </a> </span>'
 
    let input = document.querySelector('#email')
    let value = input.value
    if(value.includes('@') && value.includes('.')){
 
       let pozicijaAt = value.indexOf('@')
       let pozicijaTacka = value.indexOf('.')
 
       let izmedjuAtTacka = value.substring(pozicijaAt +1, pozicijaTacka)
       console.log(izmedjuAtTacka)
 
       if (izmedjuAtTacka.length > 0) {
 
          let prijeAt = value.substring(0,pozicijaAt)
 
          if (prijeAt.length > 2) {
 
             let posleTacke = value.substring(pozicijaTacka + 1, value.length)
             console.log( posleTacke)
 
             if (posleTacke.length > 1) {
                console.log('Uspelo je sve')
             }
             else {
                console.log('Nije uspelo sve')
             }
          }
          else{console.log('Nije dobro')}
         // console.log('Dobro je')
       
       }
       else {
          console.log('Nije dobro')
       }
 
 
       //console.log(value.substring(3,5))
    }
    else{
       console.log('Ne sadrzi')
    }
 
    //console.log(value)
 }
 