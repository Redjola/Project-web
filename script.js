const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon= document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
 
//Dark Mode Style 
function darkMode(){
    nav.style.backgroundColor= 'rgb( 0 0 0 /50%)';
    textBox.style.backgroundColor= 'rgb(255 255 255 /50%)';
    toggleIcon.children[0].textContent='Dark Mode';
    // toggleIcon.children[1].classList.add('fa-sun');
    // toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
    
}

//Light Mode Style 
function lightMode(){
    nav.style.backgroundColor= 'rgb( 255 255 255 /50%)';
    textBox.style.backgroundColor= 'rgb(0 0 0 /50%)';
    toggleIcon.children[0].textContent='Light Mode';
    // toggleIcon.children[1].classList.add('fa-moon');
    // toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
    image1.src='image/undraw_camping_noc8.svgsvg';
    image1.src='image/undraw_conceptual_idea_xw7k.svg';
    image1.src='image/undraw_Address_re_yaoj.svg';
}
//Switch theme Dynamicallu


function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme' , 'dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }else {
      document.documentElement.setAttribute('data-theme' , 'light');
      localStorage.setItem('theme','light');
      lightMode();
    }
}
//Event Listener 
toggleSwitch.addEventListener('change', switchTheme);


//Check Local Storage fot theme

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme );

    if(currentTheme== 'dark'){
        toggleSwitch.checked==true;
        darkMode();
    }
}