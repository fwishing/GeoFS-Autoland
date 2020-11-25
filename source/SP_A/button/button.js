function dropdown()
{
	document.getElementById("myDropdown").classList.toggle("show")
}

var automationrunning = 0,
	soundpackagerunning = 0;
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
if (automationrunning = 1)
{
	document.getElementById("automation").classList.add("running")
}
else
{
	document.getElementById("automation").classList.remove("running")
}
if (soundpackagerunning = 1)
{
	document.getElementById("soundpackage").classList.add("running")
}
else
{
	document.getElementById("automation").classList.remove("running")
}
