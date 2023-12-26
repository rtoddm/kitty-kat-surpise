const button = document.querySelector(".show-cat");
const cat = document.querySelector(".cat");

// button.addEventListener("click", function () {
//   cat.classList.add("show");
// });

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Click here for a surprise!";
  } else {
    cat.classList.add("show");
    button.innerText = "Make the kitty cat disappear!";
  }
});
