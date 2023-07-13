var cnt=0;
var Array_len;
function slider6(n)
{
	var items = document.getElementsByClassName('item');
	var dots = document.getElementsByClassName("dot");

	for(var i =0; i< items.length; i++)
	{
			items[i].style.display = "none";
			items[i].className = items[i].className.replace(" active","");
	}
	for (i = 0; i < dots.length; i++)
	{
    	dots[i].className = dots[i].className.replace(" i_active","");
  }
	
	Array_len=items.length;
	if (n > Array_len) 
  	{
  		cnt = 0;
  	}    
  if (n < 0) 
  	{
  		cnt = Array_len-1;
  	}



	for(var j=0;j<items.length;j++)    
	{
				for(var k=cnt;k<3+cnt;k++)
						{
							items[k].style.display = "block";
						}			
	}
	
	items[cnt+1].className += " active";
	items[cnt].className += " d_active";

	dots[cnt].className += " i_active";

}



window.onload = function() 
{
	 slider6();
}

 function dot(n)
{
	slider6(cnt=n);
}

function next6()
{

	cnt++;
	if(cnt==Array_len)
	{
		cnt=0;
	}
	slider6();
}

function prev6()
{
	cnt--;
	if(cnt<0)
	{
		cnt=Array_len-1;
	}
	slider6();
}

