let menuBurgger = document.querySelector('.buger-menu');
let menuBack = document.querySelector('.back-menu');
let navigation = document.querySelector('ul');

menuBurgger.addEventListener('click', ()=>{
    navigation.style.display='block';
    menuBurgger.style.display='none';
    menuBack.style.display='block';
});
menuBack.addEventListener('click', ()=>{
    menuBack.style.display="none";
    menuBurgger.style.display='block';
    navigation.style.display='none';
});