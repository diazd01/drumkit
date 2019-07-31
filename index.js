//INITIALIZING THE DRUM SOUNDS IN A SWITCH CASE STATEMENT:
function makeSound(key){

  switch (key) {
    case "w":
    let crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "a":
    let kickBass = new Audio('sounds/kick-bass.mp3');
    kickBass.play();
    break;

    case "s":
    let snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "d":
    let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "j":
    let tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "k":
    let tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "l":
    let tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    default:console.log(buttonInnerHTML);

  }
}
//DETECTING BUTTON PRESS:
//making the selectorAll for the drum class into a variable:
let drumButton = document.querySelectorAll(".drum");
//for loop to let i go through all the drumButton array values from 0 till the drumButton length which is 6:
for(let i = 0; i < drumButton.length; i++) {
  //then using the addEventListener JS function to add listeners to each drum button, and a callback:
  drumButton[i].addEventListener("click", function () {

    //creating variable for this.innerHTML
    let buttonInnerHTML = this.innerHTML;
    //Calling our functions:
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

//DETECTING KEYBOARD PRESS
document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

});


//MAKING THE ANIMATION:
function buttonAnimation(currentKey){
    //Setting the variable:
    let activeButton = document.querySelector("." + currentKey);
    //adding the pressed css class to make it look like an animation of being pressed:
    activeButton.classList.add("pressed");
    activeButton.style.color="#FFD700";
    // activeButton.style.transform="scale(1.1)";
    //Using setTimeout method to take off the animation after a certain period of time:
    setTimeout(function(){
      activeButton.classList.remove("pressed");
      activeButton.style.color="#FF4500";
    }, 150);
}
