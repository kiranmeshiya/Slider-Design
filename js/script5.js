var cnt=0;
var Array_len;
// var autoplay = true;
// var autoplayInterval = 5000;

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
//       slider5();
//    }, autoplayInterval);

// }


function slider5(n)
{
	var imgname = document.getElementsByClassName('img5');
	var _link = document.getElementsByClassName("img_link");

	
	for(var i =0; i< imgname.length; i++)
	{
		imgname[i].style.display = "none";
	}

	for (i = 0; i < _link.length; i++)
	{
    	_link[i].className = _link[i].className.replace(" active","");
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
	_link[cnt].className += " active";


}

function next5()
{

	cnt++;
	if(cnt==Array_len)
	{
		cnt=0;
	}
	slider5();
}

function prev5()
{
	cnt--;
	if(cnt<0)
	{
		cnt=Array_len-1;
	}
	slider5();
}

window.onload = function() 
{
	 slider5();
}

 function image_link(n)
{
	slider5(cnt=n);
}