burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');


burger.addEvntListener('click', ()=>{
    navber.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    rightNav.classList.toggle('h-nav');
});
