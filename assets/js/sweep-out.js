const details = document.querySelector("details");
details.addEventListener("click", (e) => {
  if (details.hasAttribute("open")) { // since it's not closed yet, it's open!
    e.preventDefault(); // stop the default behavior, meaning - the hiding
    details.classList.add("closing"); // add a class which applies the animation in CSS
  }
});

// when the "close" animation is over
details.addEventListener("animationend", (e) => {
  if (e.animationName === "close") {
    details.removeAttribute("open"); // close the element
    details.classList.remove("closing"); // remove the animation
  }
});