var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.jpg') {
      myImage.setAttribute ('src','images/funny.jpg');
    } else {
      myImage.setAttribute ('src','images/me.jpg');
    }
}

var myButton = document.querySelector('button');
var mySubHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      mySubHeading.innerHTML = 'Nice to Meet You' + storedName;
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Nice to Meet You' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }