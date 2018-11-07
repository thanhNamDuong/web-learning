var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

[1,2,3,4,5].forEach(element => {
  var newImage = document.createElement('img');
  newImage.setAttribute('src',`images/pic${element}.jpg`);
  thumbBar.appendChild(newImage);
});

var images = document.querySelectorAll('.thumb-bar img');
images.forEach(image => {
  image.addEventListener('click',() => {
    displayedImage.setAttribute('src',image.getAttribute('src'));
  })
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',() => {
  var className = btn.getAttribute('class');
  if(className === 'dark'){
    btn.setAttribute('class','light');
    btn.textContent = 'Lightken';
    overlay.style.backgroundColor =  rgba(0,0,0,0.5);
  }else{
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = rgba(0,0,0,0);
  }


});
