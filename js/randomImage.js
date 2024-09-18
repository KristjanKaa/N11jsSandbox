const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["images/pilt1.jpg", "images/pilt.jpg", "images/pilt3.jpg", "images/pilt4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    console.log(image);

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/pilt" + [randomIndex+1] + ".jpg";
   }