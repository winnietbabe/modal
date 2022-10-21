'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.closeModal')
const showModal = document.querySelectorAll('.show-modal')

const closemodal = function(){
    modal.classList.add('hiden')
    overlay.classList.add('hiden')

}

const openmodal = function(){
    console.log('button cliked')
    modal.classList.remove('hiden')
    overlay.classList.remove('hiden')

}

for (let i = 0; i < showModal.length; i++)
console.log(showModal[i].addEventListener('click',openmodal ))



closeModal.addEventListener('click', closemodal)
overlay.addEventListener('click', closemodal)

document.addEventListener('keydown', function(e){
  
    console.log(e.key)
    if (e.key === 'Escape' && !modal.classList.contains('hiden'))
        closemodal()
        
    }

)






