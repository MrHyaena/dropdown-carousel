import "./styles.css";

import imgOneSrc from "./27256986675_c1ecd7a66a_b.jpg";
import imgTwoSrc from "./be44349e-8861-4dc0-b562-4916b101fcd5-min.png";
import imgThreeSrc from "./main-qimg-85172a07c44d6b36329881b7a111a803-c.jpeg";
import imgFourSrc from "./pizza image.jpg";
import imageFiveSrc from "./zena.jpg";

// Dropdown

const dropdown = document.querySelector("#dropdown");
const nav = document.querySelector("#nav");
const openDropdown = document.querySelector("openDropdown");

nav.removeChild(dropdown);

let index = 0;

document.getElementById("openDropdown").addEventListener("click", () => {
  if (index == 0) {
    index = 1;
    nav.appendChild(dropdown);
  } else if (index == 1) {
    index = 0;
    nav.removeChild(dropdown);
  }
});

// Carousel

const bubOne = document.querySelector("#bubOne");
const bubTwo = document.querySelector("#bubTwo");
const bubThree = document.querySelector("#bubThree");
const bubFour = document.querySelector("#bubFour");
const bubFive = document.querySelector("#bubFive");

const one = document.querySelector("#one");

const imgOne = document.createElement("img");
imgOne.src = imgOneSrc;

const imgTwo = document.createElement("img");
imgTwo.src = imgTwoSrc;

const imgThree = document.createElement("img");
imgThree.src = imgThreeSrc;

const imgFour = document.createElement("img");
imgFour.src = imgFourSrc;

const imgFive = document.createElement("img");
imgFive.src = imageFiveSrc;

const right = document.querySelector("#right");
const left = document.querySelector("#left");

let cycler = 2;
one.appendChild(imgOne);
bubOne.style.backgroundColor = "rgb(52, 52, 52)";
window.setInterval(toRight, 2000);

left.addEventListener("click", toLeft);

function toRight() {
  if (one.lastElementChild) {
    one.removeChild(one.lastElementChild);
  }

  if (cycler == 1) {
    bubFive.style.backgroundColor = "rgb(127, 126, 126)";
    bubOne.style.backgroundColor = "rgb(52, 52, 52)";

    one.appendChild(imgOne);
    cycler = 2;
  } else if (cycler == 2) {
    bubOne.style.backgroundColor = "rgb(127, 126, 126)";
    bubTwo.style.backgroundColor = "rgb(52, 52, 52)";

    one.appendChild(imgTwo);
    cycler = 3;
  } else if (cycler == 3) {
    bubTwo.style.backgroundColor = "rgb(127, 126, 126)";
    bubThree.style.backgroundColor = "rgb(52, 52, 52)";
    one.appendChild(imgThree);
    cycler = 4;
  } else if (cycler == 4) {
    bubThree.style.backgroundColor = "rgb(127, 126, 126)";
    bubFour.style.backgroundColor = "rgb(52, 52, 52)";
    one.appendChild(imgFour);
    cycler = 5;
  } else if (cycler == 5) {
    bubFour.style.backgroundColor = "rgb(127, 126, 126)";
    bubFive.style.backgroundColor = "rgb(52, 52, 52)";
    one.appendChild(imgFive);
    cycler = 1;
  }
  console.log(cycler);
}

right.addEventListener("click", toRight);

function toLeft() {
  if (one.lastElementChild) {
    one.removeChild(one.lastElementChild);
  }

  if (cycler == 1) {
    bubFive.style.backgroundColor = "rgb(127, 126, 126)";
    bubFour.style.backgroundColor = "rgb(52, 52, 52)";

    one.appendChild(imgFour);
    cycler = 5;
  } else if (cycler == 5) {
    bubFour.style.backgroundColor = "rgb(127, 126, 126)";
    bubThree.style.backgroundColor = "rgb(52, 52, 52)";

    one.appendChild(imgThree);
    cycler = 4;
  } else if (cycler == 4) {
    bubThree.style.backgroundColor = "rgb(127, 126, 126)";
    bubTwo.style.backgroundColor = "rgb(52, 52, 52)";

    one.appendChild(imgTwo);
    cycler = 3;
  } else if (cycler == 3) {
    bubTwo.style.backgroundColor = "rgb(127, 126, 126)";
    bubOne.style.backgroundColor = "rgb(52, 52, 52)";

    one.appendChild(imgOne);
    cycler = 2;
  } else if (cycler == 2) {
    bubOne.style.backgroundColor = "rgb(127, 126, 126)";
    bubFive.style.backgroundColor = "rgb(52, 52, 52)";

    one.appendChild(imgFive);
    cycler = 1;
  }
  console.log(cycler);
}
