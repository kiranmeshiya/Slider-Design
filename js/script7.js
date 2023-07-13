var cnt=0;
var Array_len;

function slider3(n)
{
	var imgname = document.getElementsByClassName('img3');
	var dots =document.getElementsByClassName('dot')
	for(var i=0;i<imgname.length;i++)
	{
		imgname[i].style.display="none";
	}

	for(var i=0; i<dots.length ;i++)
	{
		dots[i].className=dots[i].className.replace(" active","");
	}
	if(n==Array_len)
	{
		cnt=0;
	}
	if(n<0)
	{
		cnt=Array_len;
	}

	imgname[cnt].style.display="block";
	dots[cnt].className += " active"
	Array_len=imgname.length;
}
function next3()
{
	cnt++;
	if(cnt==Array_len)
	{
		cnt=0;
	}
	slider3();
}
function prev3()
{
	cnt--;
	if(cnt<0)
	{
		cnt=Array_len;
	}
	slider3();
}
window.onload = function()
{
	slider3();
}
function dot(n)
{
	slider3(cnt=n);
}