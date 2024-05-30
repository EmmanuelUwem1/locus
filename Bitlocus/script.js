
// My JavaScript



// New scroll reveal
// sr = ScrollReveal ({
//     duration: 2000,
//     delay: 1000,
//     distance: '60px',
//     reset:true
// })

// sr.reveal('.small' ,{delay:'1500', origin:'bottom'});

// New TypeIt JS code


new TypeIt("#SearchInput", {
    strings: "Search",
    waitUntilVisible: true,
    speed:100
  }).go();


// Code for Search box 

const SearchBox = document.getElementById('search-bar');
const CancelSearchIcon = document.getElementById('cancel-search');

const searchIcon = document.querySelector('.search-icon');
const nav = document.getElementById('navlinkss')


const Logo = document.querySelector('.logo');

const HeaderIcons = document.querySelector('.header-buttons');

searchIcon.addEventListener('click', () => {
    SearchBox.classList.add('open');
    nav.classList.add('search');
    Logo.classList.add('hidden');
    HeaderIcons.classList.add('hidden');
    
    
   
})
CancelSearchIcon.addEventListener('click', () => {
    SearchBox.classList.toggle('open');
    nav.classList.remove('search');
        Logo.classList.remove('hidden');
    HeaderIcons.classList.remove('hidden');

   
    
})








// Code for Dark and Bright Modes






    // Code for ScrollReveal Effect




// Code for HamBurger menu 

var HamMenu = document.getElementById('ham-menu');

const SideMenu = document.getElementById('sidemenu');

HamMenu.addEventListener('click', () => {


    HamMenu.classList.toggle('active');
    SideMenu.classList.toggle('open');
    

})


// code for Signup and Login forms 

const formsContainer = document.querySelector('div.forms');

const SIGNUPCONTAINER = document.querySelector('.SignupContainer');

const LOGINCONTAINER = document.querySelector('.loginContainer');

const logInBtn = document.getElementById('loginButton');

const signUpBtn = document.getElementById('signupButton');

const signupLink = document.querySelector('#signup-link');

const loginLink = document.querySelector('#login-link');

const formsCloseIcon = document.querySelector('.iconoir--cancel');
const CloseIConForms = document.getElementById('FormsCloseIcon');

const Blur = document.getElementById('blur');

logInBtn.addEventListener('click',  ()=> {
    formsContainer.classList.add('open');
    LOGINCONTAINER.classList.add('open');
    SIGNUPCONTAINER.classList.remove('open');
    Blur.classList.add('active');

} )
signUpBtn.addEventListener('click',  ()=> {
    formsContainer.classList.add('open');
    LOGINCONTAINER.classList.remove('open');
    SIGNUPCONTAINER.classList.add('open');
    Blur.classList.add('active');


} )

loginLink.addEventListener('click',  ()=> {
    formsContainer.classList.add('open');
    LOGINCONTAINER.classList.add('open');
    SIGNUPCONTAINER.classList.remove('open');
} )
signupLink.addEventListener('click',  ()=> {
    formsContainer.classList.add('open');
    LOGINCONTAINER.classList.remove('open');
    SIGNUPCONTAINER.classList.add('open');
} )


CloseIConForms.addEventListener('click', () => {
    formsContainer.classList.remove('open');
    Blur.classList.remove('active');



})

formsCloseIcon.addEventListener('click', () => {
    formsContainer.classList.remove('open');
    Blur.classList.remove('active');


})

// Login and Signup Buttons for Mobile Devices  

const loginBtn = document.getElementById('LoginButton');

const signupBtn = document.getElementById('SignupButton');

loginBtn.addEventListener('click', () => {
    formsContainer.classList.add('open');
    LOGINCONTAINER.classList.add('open');
    SIGNUPCONTAINER.classList.remove('open');
    SideMenu.classList.toggle('open');
    HamMenu.classList.toggle('active');
    Blur.classList.add('active');
})
signupBtn.addEventListener('click', () => {
    formsContainer.classList.add('open');
    LOGINCONTAINER.classList.remove('open');
    SIGNUPCONTAINER.classList.add('open');
    SideMenu.classList.toggle('open');
    HamMenu.classList.toggle('active');
    Blur.classList.add('active');
})




// Code for Extra UI Forms on open Forms Ends HEre


// Code for Login and Signup for Mobile Devices







// Code for Lazy load and Skeleton loading Effects 



const BoldText = document.getElementById('bolder');

const MediumText = document.querySelector('.medium');

const ImageContainer = document.querySelector('.image');

const Image = document.querySelector('.picture');

function imgloaded() {
    ImageContainer.classList.add('loaded');
    Image.classList.add('loaded');
}
function Btextloaded() {
    BoldText.classList.add('loaded');
}
function Mtextloaded() {
MediumText.classList.add('loaded');
}

if(BoldText.complete){
    Btextloaded()
}
else{
    BoldText.addEventListener("load", Btextloaded());
}


if(MediumText.complete){
    Mtextloaded()
}
else{
    MediumText.addEventListener("load",  Mtextloaded());
}

if(Image.complete){
    Image.classList.add('loaded');
    ImageContainer.classList.add('loaded');
}

else{
    Image.addEventListener('load', imgloaded())
}









