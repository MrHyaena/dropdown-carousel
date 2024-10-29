import "./styles.css";

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
