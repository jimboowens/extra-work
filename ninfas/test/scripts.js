window.onscroll=()=>{
    myFunction()
};

var pageContainer = document.getElementById("page-container");
var sticky = pageContainer.offsetTop;

// this function turns the pageContainer to position fixed when the yOffset of the window
// is greater than or equal to the pageContainer yOffset

function myFunction() {
  if (window.pageYOffset >= sticky) {
    pageContainer.classList.add("sticky")
  } else {
    pageContainer.classList.remove("sticky");
  }
}