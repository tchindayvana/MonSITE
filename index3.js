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

