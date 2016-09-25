var list=["IMG_0002.JPG","IMG_0035.JPG","IMG_0149.JPG",
"IMG_0150.JPG","IMG_0466.jpg"];
var Counter=0;
function SlideImage()
{
	 if (Counter >= list.length)
                Counter = 0;
            document.getElementById("slidepic").setAttribute("src",  list[Counter]);           
            Counter++;
	}
	
setInterval(SlideImage,1000);
