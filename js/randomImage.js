const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["images/Pic1.jpg", "images/Pic2.jpg", "images/Pic3.jpg", "images/Pic4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    image.src = randomImage;
    console.log("Uus pilt:", randomImage);
}