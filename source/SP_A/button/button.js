function dropdown()
{
	document.getElementById("myDropdown").classList.toggle("show")
}

var automationrunning = 0;
var soundpackagerunning = 0;
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
	if (automationrunning == 1)
	{
		document.getElementById("automation").classList.add("running")
		document.getElementById("automation").classList.remove("button")
	}
	else
	{
		document.getElementById("automation").classList.remove("running")
		document.getElementById("automation").classList.add("button")
	}
	if (soundpackagerunning == 1)
	{
		document.getElementById("soundpackage").classList.add("running")
		document.getElementById("automation").classList.remove("button")
	}
	else
	{
		document.getElementById("automation").classList.remove("running")
		document.getElementById("automation").classList.add("button")
	}
	console.log("automation: "+automationrunning);
	console.log("soundpackage: "+soundpackagerunning);
	console.log('');
},500)
