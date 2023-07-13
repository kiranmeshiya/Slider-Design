var cnt=0;
var Array_len;
var autoplay = true;
var autoplayInterval = 4000;

function show()
{
		cnt++;
    if (cnt == Array_len) //1>5
  	{
  		cnt = 0;
  	}    
  	if (cnt < 0) 
  	{
  		cnt = Array_len-1;
  	}
      slider4();
}

if(autoplay)
{
	setInterval(show,autoplayInterval)
}


function slider4(n)
{
	var items = document.getElementsByClassName('item');
	var dots = document.getElementsByClassName("dot");

	for(var i =0; i< items.length; i++)
	{
			items[i].style.display = "none";
			items[i].className = items[i].className.replace(" i_active","");
	}
	for (i = 0; i < dots.length; i++)
	{
    	dots[i].className = dots[i].className.replace(" d_active","");
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
				for(var k=cnt;k<5+cnt;k++)
						{
							items[k].style.display = "block";
						}			
	}

	
	items[cnt+2].className += " i_active";
	dots[cnt].className += " d_active";
}



window.onload = function() 
{
	 slider4();
}

 function dot(n)
{
	slider4(cnt=n);
}


// if (autoplay) {
//    setInterval(function() {
//     cnt++;
  
//     if (cnt == Array_len) //1>5
//   	{
//   		cnt = 0;
//   	}    
//   	if (cnt < 0) 
//   	{
//   		cnt = Array_len-1;
//   	}
//       slider4();
//    }, autoplayInterval);

// }