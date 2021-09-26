let searchBtn = document.querySelector('#search-btn'); 
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn'); 
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');


window.onscroll = () =>{
    searchBtn.classList.remove('fas fa-times');
    searchBar.classList.remove('active');


}

searchBtn.addEventListener('click', () =>{

    searchBtn.classList.toggle('fas fa-times');
    searchBar.classList.toggle('active');


    });

formBtn.addEventListener('click', () =>{

    searchBtn.classList.add('active');
    


    });


formClose.addEventListener('click', () =>{

    searchBtn.classList.remove ('active');
    


    });