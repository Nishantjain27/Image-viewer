var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var pics = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

for(var i=0;i<5;i++){
  newImage = document.createElement('img');
  newImage.setAttribute('src',pics[i]);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e){
  	var source = e.target.getAttribute('src');
  	displayedImage.setAttribute('src',source);
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
	var cond = btn.getAttribute('class');
	if(cond === 'dark'){
		btn.setAttribute('class','light');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	}
	else {
		btn.setAttribute('class','dark');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}
