// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// var myVariable;
// myVariable = 'Bob';

// myVariable;

// myVariable = 'Steve';
// myVariable;

// "hello" + "world!";

// console.log(9 / 2);

// alert('hello!');

// document.querySelector('html').onclick = function() {
//     alert('痛っ! つつくのはやめて!');
// }

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute ('src','images/juice.png');
    } else {
      myImage.setAttribute ('src','images/firefox.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
  }


  myButton.onclick = function() {
    setUserName();
  }