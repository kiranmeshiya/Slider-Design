var cnt=0;
var Array_len


function slider2()
{
	var imgname = document.getElementsByClassName('img2');
	var dots = document.getElementsByClassName("dot");

	for(var i =0; i< imgname.length; i++)
	{
		imgname[i].style.display = "none";
	}

	imgname[cnt].style.display = "block";
	Array_len=imgname.length;
	
}

function next2()
{
	cnt++;
	if(cnt==Array_len-1)
	{
		document.getElementById('_btn_right').style.display = "none";
	}
	else
	{
		document.getElementById('_btn_left').style.display = "block";
	}
	slider2();
}

function prev2()
{
	cnt--;
	if(cnt<=0)
	{
		document.getElementById('_btn_left').style.display = "none";
		
	}
	else
	{
		document.getElementById('_btn_right').style.display = "block";
		
	}
	if(cnt=0)
	{
		document.getElementById('_btn_left').style.display = "none";
	}
	slider2();
}

window.onload = function() 
{
	 slider2();
}

