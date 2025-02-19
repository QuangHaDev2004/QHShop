
// Hide sub header when scroll
window.addEventListener("scroll", () => {
  const headerElement = document.querySelector("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    headerElement.classList.add("hide-sub-header");
  } else {
    headerElement.classList.remove("hide-sub-header");
  }

})
// End Hide sub header when scroll





