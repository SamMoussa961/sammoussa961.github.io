/**
 * Student Name: Samer Moussa
 * Student Number: 100943496
 * File name: main.js
 * Due Date: august 1st, 2024
 * Description: assignment 4 part 2 - image display
 */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alternativeText = {
    "pic1.jpg" : "Closeup of a human eye",
    "pic2.jpg" : "Marble waves",
    "pic3.jpg" : "Flowers",
    "pic4.jpg" : "Pharoah",
    "pic5.jpg" : "Huge butterfly"
};

/* Looping through images */
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alternativeText[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e=>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=>{
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark"){ 
        btn.setAttribute("class", "light");
        btn.textContent = "lighter";
        overlay.style.backgroundColor = "rgba(0, 0, 0, .5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darker";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});