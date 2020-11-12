let automationrunning = 0
let soundpackagerunning = 0
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function automation() {
  console.log("automation");
}
function soundpackage() {
  console.log("soundpackage");
}
function flipautomation() {
  automationrunning ^= true;
}
function flipsoundpackage() {
  soundpackagerunning ^= true;
}
if (automationrunning=1) {
  automation()
}
