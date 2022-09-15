/* domMan.js */

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const myP = document.createElement('p');
myP.classList.add('myP');
myP.textContent = "Hey I'm red!";
container.appendChild(myP);

const myH3 = document.createElement('h3');
myH3.classList.add('myH3');
myH3.textContent = "I'm a blue h3";
container.appendChild(myH3);

// container.appendChild(content);

// content = document.createElement('p');
// content.classList.add('content');
// container.appendChild(content);





// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
