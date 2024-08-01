/**
 * Student Name: Samer Moussa
 * Student Number: 100943496
 * File name: main.js
 * Due Date: august 1st, 2024
 * Description: assignment 4 part 1 - Silly story generator
 */
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX =["Willy the Goblin","Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  let newStroy = storyText
    .replace(/:insertx:/g, xItem)
    .replace(/:inserty:/g, yItem)
    .replace(/:insertz:/g, zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStroy.replace(/Bob/g, name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round((94-32)*5/9);
    newStroy.replace(/94 fahrenheit/g, temperature + " Centigrade")
    newStroy.replace(/300 pounds/g, weight + "Stones")
  }

  story.textContent = newStroy;
  story.style.visibility = 'visible';
}