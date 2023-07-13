var cnt=0;
var Array_len
function slider3(n)
{
	var imgname = document.getElementsByClassName('img3');
	var dots = document.getElementsByClassName("dot");

	for(var i =0; i< imgname.length; i++)
	{
		imgname[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++)
	{
    	dots[i].className = dots[i].className.replace(" active","");
  	}

	Array_len=imgname.length;


  	if (n > Array_len) //0>8
  	{
  		cnt = 0;
  	}    
  	if (n < 0) 
  	{
  		cnt = Array_len-1;
  	}


	imgname[cnt].style.display = "block";
	dots[cnt].className += " active";

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
		cnt=Array_len-1;
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