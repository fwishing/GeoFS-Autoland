function dropdown()
{
	document.getElementById("myDropdown").classList.toggle("show")
}

var autoflapsrunning = 1;
var autogearrunning = 1;
var soundpackagerunning = 1;
window.onclick = function (n)
{
	if (!n.target.matches(".dropbtn"))
	{
		var o, t = document.getElementsByClassName("dropdown-content");
		for (o = 0; o < t.length; o++)
		{
			var e = t[o];
			e.classList.contains("show") && e.classList.remove("show")
		}
	}
}
setInterval(function() {
	if (soundpackagerunning == 1)
	{
		document.getElementById("soundpackage").classList.add("running")
		document.getElementById("soundpackage").classList.remove("button")
	}
	else
	{
		document.getElementById("soundpackage").classList.remove("running")
		document.getElementById("soundpackage").classList.add("button")
	}
	if (autogearrunning == 1) {
		document.getElementById("autogear").classList.add("running")
		document.getElementById("autogear").classList.remove("button")
	} else {
		document.getElementById("autogear").classList.remove("running")
		document.getElementById("autogear").classList.add("button")
	}
	if (autoflapsrunning == 1) {
		document.getElementById("autoflaps").classList.add("running")
		document.getElementById("autoflaps").classList.remove("button")
	}	else {
		document.getElementById("autoflaps").classList.remove("running")
		document.getElementById("autoflaps").classList.add("button")
	}
},500)
