var numberOfDrums = document.querySelectorAll(".drum").length;


// call the character against the event listener for the key press

// call it for the event listener for the drum buttons

// Detecting button press

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    // addEventListener is a method that listens to the type and listener which call a function (type, listener)
    var buttoninnerHTML = this.innerHTML;

    // The method "this" shows you what exactly triggered the function (essentially what was clicked)

    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
  });
}

// Detecting keyboard press

document.addEventListener("keydown", function(event) {
  // we can tap into the event that triggered the listener
  var key = event.key
  var capsLockState = event.getModifierState("CapsLock");
  if (capsLockState === true) {
    key = key.toLowerCase();
  }
  makeSound(key);
  buttonAnimation(key);
});


// Plays sounds based on events

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  // add pressed to class list
  activeButton.classList.add("pressed");

  // a timer to remove the press function

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
