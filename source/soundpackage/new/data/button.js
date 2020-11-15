var automationrunning = 0;
var soundpackagerunning = 0;
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
};
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      };
    };
  };
};
function flip(vari) {
  vari ^= true;
};
if (automationrunning==1) {
    console.log("automation");
    document.getElementById("automation").classList.add("running");
} else {
  document.getElementById("automation").classList.remove("running");
};
if (soundpackagerunning==1) {
    console.log("soundpackage");
    document.getElementById("soundpackage").classList.add("running");
} else {
    document.getElementById("automation").classList.remove("running");
};
