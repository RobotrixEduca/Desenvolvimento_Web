var menuIcon = document.querySelector('.menu_icon');
var ul = document.querySelector('.cabeca nav ul');

menuIcon.addEventListener('click', ()=>{
    if(ul.classList.contains('ativo')){
        ul.classList.remove('ativo');

    }else{
        ul.classList.add('ativo');
    }
})