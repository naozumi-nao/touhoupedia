//==========DROPDOWN=============
function dropdown() {
  document.getElementById("js-dropdown").classList.toggle("show")
}
window.onclick = function(element) {
  if (!element.target.matches(".drop-btn")) {
    var dropdown = document.getElementById("js-dropdown")
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
  }
}

//=============SLIDER==============
function createSlider(elementSelector, beforeSelector, afterSelector) {
  let imageArray = document.querySelectorAll(elementSelector),
  before = document.querySelector(beforeSelector),
  after = document.querySelector(afterSelector),
  index = 0;

  function reset() {
    for (let i = 0; i < imageArray.length; i++) {
      imageArray[i].style.display = "none";
    }
  }
  
  function beginSlide() {
    reset();
    imageArray[0].style.display = "block";
  }
  
  function slideBefore() {
    reset();
    imageArray[index - 1].style.display = "block";
    index--;
  }
  
  function slideAfter() {
    reset();
    imageArray[index + 1].style.display = "block";
    index++;
  }
  
  before.addEventListener("click", function() {
    if (index === 0) {
      index = imageArray.length;
    }
    slideBefore();
  });
  
  after.addEventListener("click", function() {
    if (index === imageArray.length - 1) {
      index = -1;
    }
    slideAfter();
  });
  
  beginSlide();
}
// create slider for each character potrait collection
createSlider(".reimu-potrait", "#reimu-before", "#reimu-after");
createSlider(".marisa-potrait", "#marisa-before", "#marisa-after");
createSlider(".yukari-potrait", "#yukari-before", "#yukari-after");
createSlider(".joon-potrait", "#joon-before", "#joon-after");
createSlider(".nitori-potrait", "#nitori-before", "#nitori-after");