var date = 8
var hour = 11
var min = 54
var sec = 0
const a = document.querySelectorAll(".hour");
const b = document.querySelectorAll(".min");
const c = document.querySelectorAll(".sec");
const i = document.querySelectorAll("#image");

function time(){
var d = new Date()
var d1 = d.getDate()
var h =d.getHours();
var m =d.getMinutes();
var s =d.getSeconds();
if(h>12){
	if((h-12)<10){
		a[0].innerHTML="0"+ (h-12)
	}
	else{
	a[0].innerHTML=h-12}
}
else{
	if(h<10){
		a[0].innerHTML="0"+h
	}
	else{
	a[0].innerHTML=h}
}
if(m<10){
b[0].innerHTML="0"+m
}
else{
	b[0].innerHTML=m
}
a[1].innerHTML = hour+ (24-parseInt(h))
b[1].innerHTML = 60-Math.abs(min - parseInt(m))
var x = Math.abs(sec - parseInt(s))

if(x<10){
c[0].innerHTML = (60-Math.abs(sec - parseInt(s)))
}
else{
	c[0].innerHTML = '0'+60-(Math.abs(sec - parseInt(s)))
}
}
setInterval(time, 1000);

var imgidx = 0;
var imgtoggle = false;

// Images for our slideshow - have to be at least two
var images = [
  'zUSAspacex1.png',
  'zUSAspacex2.png',
  'zUSAspacex3.png'
];

// This function will initialize loading the next image in background
window.nextImage = function() {
  imgtoggle = !imgtoggle;

  imgidx = (imgidx + 1) % images.length;

  if (imgtoggle)
    document.getElementById('image2').src = images[imgidx];
  else
    document.getElementById('image1').src = images[imgidx];;
}

// This function will trigger the crossfade and then start the timer for the next switch
window.fadeImage = function() {
  if (imgtoggle)
    document.getElementById('image2').style.visibility = 'visible';
  else
    document.getElementById('image2').style.visibility = 'hidden';
  window.setTimeout(nextImage, 4000);
}

// Now load our very first image to start the slideshow
document.getElementById('image1').src = images[0];