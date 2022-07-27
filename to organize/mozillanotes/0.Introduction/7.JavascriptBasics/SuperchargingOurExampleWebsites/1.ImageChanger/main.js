let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img_girl.jpg') {
      myImage.setAttribute('src','img_food.jpg');
    } else {
      myImage.setAttribute('src','img_girl.jpg');
    }
}
