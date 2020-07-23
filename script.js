const keys = document.querySelectorAll(".key");

// Adding click event to all keys

keys.forEach((key) => {
  key.addEventListener("click", handleClick);
});

// Getting values of data-link so that we can make sound

function handleClick() {
  var dataNote = this.getAttribute("data-note");
  playSound(dataNote);
  buttonAnimation(dataNote);
}

// Handle keyboard press

document.addEventListener("keypress", handleKeyboard);

function handleKeyboard() {
  playSoundOnKeypress(event.key);
}

// Play sound using click

function playSound(key) {
  switch (key) {
    case "A":
      new Audio("sounds/A.mp3").play();
      break;
    case "Ab":
      new Audio("sounds/Ab.mp3").play();
      break;
    case "B":
      new Audio("sounds/B.mp3").play();
      break;
    case "Bb":
      new Audio("sounds/Bb.mp3").play();
      break;
    case "C":
      new Audio("sounds/C.mp3").play();
      break;
    case "D":
      new Audio("sounds/D.mp3").play();
      break;
    case "Db":
      new Audio("sounds/Db.mp3").play();
      break;
    case "E":
      new Audio("sounds/E.mp3").play();
      break;
    case "Eb":
      new Audio("sounds/Eb.mp3").play();
      break;
    case "F":
      new Audio("sounds/F.mp3").play();
    case "G":
      new Audio("sounds/G.mp3").play();
      break;
    case "Gb":
      new Audio("sounds/Gb.mp3").play();
      break;
    default:
      console.log(key);
  }
}

// Play sound on keyboard press

function playSoundOnKeypress(key) {
  if (key == "a") {
    playSound("C");
    buttonAnimation("C");
  } else if (key == "w") {
    playSound("Db");
    buttonAnimation("Db");
  } else if (key == "s") {
    playSound("D");
    buttonAnimation("D");
  } else if (key == "e") {
    playSound("Eb");
    buttonAnimation("Eb");
  } else if (key == "d") {
    playSound("E");
    buttonAnimation("E");
  } else if (key == "j") {
    playSound("F");
    buttonAnimation("F");
  } else if (key == "i") {
    playSound("Gb");
    buttonAnimation("Gb");
  } else if (key == "k") {
    playSound("G");
    buttonAnimation("G");
  } else if (key == "o") {
    playSound("Ab");
    buttonAnimation("Ab");
  } else if (key == "l") {
    playSound("A");
    buttonAnimation("A");
  } else if (key == "p") {
    playSound("Bb");
    buttonAnimation("Bb");
  } else if (key == ";") {
    playSound("B");
    buttonAnimation("B");
  }
}

// Pressed key animation

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");
  setTimeout(function () {
    activeButton.classList.remove("animation");
  }, 200);
}
