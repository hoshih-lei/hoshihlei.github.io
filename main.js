let myimg=document.querySelector('img');
myimg.onclick=function() {
	let mysrc=myimg.getAttribute('src');
	if (mysrc === 'img/戈薇.jpg') {
		myimg.setAttribute('src','img/七宝.jpg');
	}
	else {
		myimg.setAttribute('src','img/戈薇.jpg');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('您是？');
  localStorage.setItem('name', myName);
  myHeading.textContent = '请收下这首诗，' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '请收下这首诗，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}
