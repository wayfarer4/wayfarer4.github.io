let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/me.jpg') {
    myImage.setAttribute ('src','images/roses.jpg');
  } else {
    myImage.setAttribute ('src','images/me.jpg');

  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome, ' + myName;
  }
}

myButton.onclick = function() {
  setUserName();
}