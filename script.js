// top nav bar 

// Get the navbar
var navbar = document.getElementById("myTopnav");

function myFunction() {
    if (navbar.className === "topnav" || navbar.className === "topnav sticky") {
      navbar.className += " responsive";
    } else {
      navbar.className = "topnav sticky";
    }
  }


  // When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunction()};


// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




// live follower 
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});
