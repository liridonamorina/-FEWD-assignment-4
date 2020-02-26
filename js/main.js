/*let changeImage = function() {
  const choseACity = document.querySelector(".choseACity");

  if (choseACity.value === "NYC") {
    document.body.style.backgroundImage = "url(./images/nyc.jpg)";
  } else if (choseACity.value === "SF") {
    document.body.style.backgroundImage = "url(./images/sf.jpg)";
  } else if (choseACity.value === "LA") {
    document.body.style.backgroundImage = "url(./images/la.jpg)";
  } else if (choseACity.value === "ATX") {
    document.body.style.backgroundImage = "url(./images/austin.jpg)";
  } else if (choseACity.value === "SYD") {
    document.body.style.backgroundImage = "url(./images/sydney.jpg)";
  }
};*/
console.log("dona");
document.addEventListener("DOMContentLoaded", function() {
  let selectedBackground;
  const choseACity = document.querySelector(".choseACity");
  const backgroundImageContainer = document.querySelector(".bg-image");

  choseACity.addEventListener("change", function(event) {
    selectedBackground = event.target.value;
    console.log(event.target.value);

    if (backgroundImageContainer.classList.contains(".bg-image")) {
      backgroundImageContainer.classList.remove(".bg-image");
    }
    backgroundImageContainer.style.backgroundImage = `url("./images/${selectedBackground}.jpg")`;
  });
});
