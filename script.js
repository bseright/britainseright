// establish elements

let faces = document.querySelectorAll(".face");
let hexagon = document.querySelector(".hexagon");
let container = document.querySelector(".container");

let right = document.querySelector(".right");
let left = document.querySelector(".left");
let topFace = document.querySelector(".top");

let pulseRight = document.querySelector(".pulseRight");
let pulseLeft = document.querySelector(".pulseLeft");
let pulseTop = document.querySelector(".pulseTop");


// start hover functions

let rightMouseover = function() {
    right.classList.remove("right");
    right.classList.remove("pulseRight");
    left.classList.remove("pulseLeft");
    topFace.classList.remove("pulseTop");

    right.classList.add("hoverRight");
    left.classList.add("stopPulseLeft");
    topFace.classList.add("stopPulseTop");

    hexagon.remove();
}

let rightMouseout = function() {
    right.classList.add("right");

    right.classList.add("pulseRight");
    left.classList.add("pulseLeft");
    topFace.classList.add("pulseTop");

    right.classList.remove("hoverRight");
    left.classList.remove("stopPulseLeft");
    topFace.classList.remove("stopPulseTop");

    container.prepend(hexagon);
}

let leftMouseover = function() { 
    right.classList.remove("pulseRight");
    left.classList.remove("left");
    left.classList.remove("pulseLeft");
    topFace.classList.remove("pulseTop");

    right.classList.add("stopPulseRight");
    left.classList.add("hoverLeft");
    topFace.classList.add("stopPulseTop");

    hexagon.remove();
}

let leftMouseout = function() {
    right.classList.add("pulseRight");
    left.classList.add("left");
    left.classList.add("pulseLeft");
    topFace.classList.add("pulseTop");

    right.classList.remove("stopPulseRight");
    topFace.classList.remove("stopPulseTop");

    left.classList.remove("hoverLeft");

    container.prepend(hexagon);
}

let topMouseover = function() {
    right.classList.remove("pulseRight");
    left.classList.remove("pulseLeft");
    topFace.classList.remove("top");
    topFace.classList.remove("pulseTop");

    right.classList.add("stopPulseRight");
    left.classList.add("stopPulseLeft");
    topFace.classList.add("hoverTop");

    hexagon.remove();
}

let topMouseout = function() {
    right.classList.add("pulseRight");
    left.classList.add("pulseLeft");
    topFace.classList.add("top");
    topFace.classList.add("pulseTop");

    right.classList.remove("stopPulseRight");
    left.classList.remove("stopPulseLeft");
    topFace.classList.remove("hoverTop");

    container.prepend(hexagon);
}

// start click functions

let aboutClick = function() {
    
    left.classList.add("left");

    right.classList.remove("stopPulseRight");
    topFace.classList.remove("stopPulseTop");
    left.classList.remove("hoverLeft");
}


// add hover event listeners 

right.addEventListener('mouseover', rightMouseover);

right.addEventListener('mouseout', rightMouseout);

left.addEventListener('mouseover', leftMouseover);

left.addEventListener('mouseout', leftMouseout);

topFace.addEventListener('mouseover', topMouseover);

topFace.addEventListener('mouseout', topMouseout);


// add click event listeners

left.addEventListener('click', aboutClick);
