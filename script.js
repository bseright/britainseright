let faces = document.querySelectorAll(".face");
let hexagon = document.querySelector(".hexagon");
let container = document.querySelector(".container");

let right = document.querySelector("#right");
let left = document.querySelector("#left");
let topFace = document.querySelector("#top");

let pulseRight = document.querySelector(".pulseRight");
let pulseLeft = document.querySelector(".pulseLeft");
let pulseTop = document.querySelector(".pulseTop");

faces.forEach(face => {
    face.addEventListener('mouseover', function() {
        
        right.classList.remove("pulseRight");
        left.classList.remove("pulseLeft");
        topFace.classList.remove("pulseTop");

        hexagon.remove();

    })

    face.addEventListener('mouseout', function() {
        
        right.classList.add("pulseRight");
        left.classList.add("pulseLeft");
        topFace.classList.add("pulseTop");

        container.prepend(hexagon);
    })
})
