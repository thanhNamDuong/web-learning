// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// var iceCream = 'chocolate';
// if (iceCream === 'chocolate'){
//     alert('Yay, I love chocolate ice cream');
// }else {
//     alert('Awwww, but chocolate is my favorite...');
// }

// var myImage = document.querySelector('img');

// myImage.onclick = function(){
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/mx.jpg'){
//        // myImage.setAttribute('src',null);
//        alert('kute girl');
//     }else{
//         alert('kute girl');

//     }
// }
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
    var myName = prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Monaliza is cool,' + myName;
}

if(!localStorage.getItem('name'))
{
    setUserName();
}else
{
    var storagedName  = localStorage.getItem('name');
    myHeading.textContent = 'Monaliza is cool,' + storagedName;
}

myButton.onclick = function()
{
    setUserName();
}