/*const image = document.getElementById('image');
let rotationAngle = 0;
function rotationImage(){
    rotationAngle +=50;
    image.style.transform ='  rotate(${rotationAngle}deg)';
}
image.addEventListener('click ',rotationImage());*/
const image = document.getElementById('myImage');
image.addEventListener("click", function(){
    Image.classList.add("rotate");

});
image.addEventListener("mouseover",function(){
    image.classList.remove("rotate");
});
document.addEventListener("DOMContentLoaded", function() {
    const bubbleContainer = document.querySelector('.bubble-container');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
        bubble.style.backgroundColor = getRandomColor(); // Set random color
        bubbleContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 15000);
    }

    setInterval(createBubble, 500);
});
