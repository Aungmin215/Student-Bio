const img = document.getElementById("mybio");
img.addEventListener("click", changeShape)

const shapeArr = [
// Hexagon
"25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%"
//parallegon
25% 0%, 100% 0%, 75% 100%, 0% 100%
// Trapezoid
"20% 0%, 80% 0%, 100% 100%, 0% 100%"
//left point
"25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%"
//rhombus
"50% 0%, 100% 50%, 50% 100%, 0% 50%",

],

function changeShape(params) {
    const ramdomShape = Math.floor(Math.random()
*shapeArr.length);
const newCliPath = shapeArr[ramdomShape];
const currentClipPath = getComputedStyle(img).getPropertyValue("--shape");

img.style.setProperty("--shape", shapeArr[ramdomShape]),

if (currentClipPath ! = newCliPath) {
    img.style.setProperty("--shape", newCliPath);
} else {
    img.style.setProperty("--shape", shapeArr[ramdomShape +1]);
    console.log(shapeArr[ramdomShape + 1]) 

}
}