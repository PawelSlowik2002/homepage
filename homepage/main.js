console.log("hej");

var takeClass = document.querySelector(".article__text--js");

takeClass.innerHTML = "Da się :)";

const introduction = function(name, age){
    console.log("Cześć mam na imię " + name  + " i mam " + age +"lat.");
}

introduction("Paweł" , 20);

const headerButton = document.querySelector(".header__button--js");

const clickButton = function(){
    console.log("Kliknałeś");
    const title = document.querySelector(".header__title");
    title.innerHTML = "Pozdrawiam";
    
}

headerButton.addEventListener("click" , clickButton);

const navButton = document.querySelector(".navigation__button--js");


const clickNavButton = function(){
    const navContainer = document.querySelector(".navigation__container")
    navContainer.classList.toggle("navigation__container--js")
}
navButton.addEventListener("click" , clickNavButton);
