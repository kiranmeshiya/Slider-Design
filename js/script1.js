var cnt=0;
var Array_len;
function slider1()
{
	var imgname = document.getElementsByClassName('item');

	for(var i =0; i< imgname.length; i++)
	{
		imgname[i].style.display = "none";
	}

	imgname[cnt].style.display = "block";
	Array_len=imgname.length;
}

function next1()
{
	cnt++;
	if(cnt==Array_len)
	{
		cnt=0;
	}
	slider1();
}

function prev1()
{
	cnt--;
	if(cnt<0)
	{
		cnt=Array_len-1	
	}
	slider1();
}

window.onload = function() 
{
	slider1();
}