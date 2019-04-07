const nameInput = document.querySelectorAll('.empty')
let passeword=document.querySelector('.pass') 

const button = document.querySelector('.send');

button.addEventListener('click', () =>{
  for ( el of nameInput){
    // console.log(el.value)
    if (el.value ===''){
     alert('3amer kolchy')
     break
    }
    
  }
  var x =/(?=.*[0-9])()/
  if ( !x.test(passeword.value)) {
  alert("3amer el passeword bes7i7")}

})

