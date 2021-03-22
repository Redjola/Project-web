const toggleSwitch = document.querySelector('input[type="checkbox"]');

//Switch theme Dynamicallu

function switchTheme(event){
    console.log(event);
}
//Event Listener 
toggleSwitch.addEventListener('change', switchTheme);