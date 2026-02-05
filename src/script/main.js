const product = document.getElementById("product");
const pricing = document.getElementById("pricing");
const customers = document.getElementById("customers");
const resources = document.getElementById("resources");
const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");
const getStarted = document.getElementById("get-started");
const watchVideo = document.getElementById("watch-video");

function handleClick(e) {
  e.preventDefault();
  alert("Nothing happens!");
}

product.addEventListener("click", handleClick);
pricing.addEventListener("click", handleClick);
customers.addEventListener("click", handleClick);
resources.addEventListener("click", handleClick);
signIn.addEventListener("click", handleClick);
signUp.addEventListener("click", handleClick);
getStarted.addEventListener("click", handleClick);
watchVideo.addEventListener("click", handleClick);
