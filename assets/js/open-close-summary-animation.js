const detailsList = document.querySelectorAll("details");

detailsList.forEach((details) => {
  details.addEventListener("click", (e) => {
    if (details.hasAttribute("open")) {
      e.preventDefault();
      details.classList.add("closing");
    }
  });

  details.addEventListener("animationend", (e) => {
    if (e.animationName === "close") {
      details.removeAttribute("open");
      details.classList.remove("closing");
    }
  });
});