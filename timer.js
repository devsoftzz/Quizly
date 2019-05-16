var m = 5;
var s = 0;
function timer()
{
	if(s != 0)
	{
		s--;
	}
	else{
		s = 59;
		m--;
	}
	document.getElementById('min').innerHTML = m + ":" + (s<10?("0"+s): s);	
	if (s==0 && m==0) {
		document.getElementById('min').innerHTML = "0:00";
		clearInterval(timer);
		alert("Time OUT!!");
		result();
	}
}
var x = setInterval(timer,1000);