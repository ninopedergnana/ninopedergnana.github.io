import { fetchData } from "./color.mjs";

const buttonToChangeColors = document.getElementById('buttonToChangeColors');

// Define the function you want to bind
function handleClick() {
    changeColors();
  }
  
  // Bind the function to the button's click event
  button.addEventListener('click', handleClick);


function changeColors() {
    const colors = fetchData();
    console.log('Colors fetched: ', colors);
    document.body.style.setProperty('--first-color', colors[0]);
    document.body.style.setProperty('--second-color', colors[1]);
    document.body.style.setProperty('--third-color', colors[2]);
    document.body.style.setProperty('--fourth-color', colors[3]);
    document.body.style.setProperty('--fifth-color', colors[4]);
};
