let faces = document.querySelectorAll(".face");
let hexagon = document.querySelector(".hexagon");
let container = document.querySelector(".container");

let right = document.querySelector(".right");
let left = document.querySelector(".left");
let topFace = document.querySelector(".top");

let pulseRight = document.querySelector(".pulseRight");
let pulseLeft = document.querySelector(".pulseLeft");
let pulseTop = document.querySelector(".pulseTop");

right.addEventListener('mouseover', function() {
    
    right.classList.remove("right");
    right.classList.remove("pulseRight");
    left.classList.remove("pulseLeft");
    topFace.classList.remove("pulseTop");

    right.classList.add("hoverRight");
    left.classList.add("stopPulseLeft");
    topFace.classList.add("stopPulseTop");

    hexagon.remove();
})

right.addEventListener('mouseout', function() {
    
    right.classList.add("right");
    right.classList.add("pulseRight");
    left.classList.add("pulseLeft");
    topFace.classList.add("pulseTop");

    right.classList.remove("hoverRight");
    left.classList.remove("stopPulseLeft");
    topFace.classList.remove("stopPulseTop");

    container.prepend(hexagon);
})

