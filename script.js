//document.addEventListener('DOMContentLoaded', function(){
//create div and add to body
//let div = document.createElement('div');
// div.className = 'div';
// document.body.appendChild(div);

//create button and add to body
let button = document.createElement('button');
let btnTxt = document.createTextNode('Add Square');
let squareDiv = document.createElement('div');
button.appendChild(btnTxt);
//button.className = 'button';
document.body.appendChild(button);
document.body.appendChild(squareDiv);

//listen for click and produce a black square
let id = '0';
button.addEventListener('click', function() {
    //console log to see if function working
    //console.log('id');
    let div = document.createElement('div');
    squareDiv.appendChild(div);
    div.style.backgroundColor = 'black';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.cssFloat = 'left';
    div.className = 'squares';
    div.setAttribute('id', id);
    id++;

    div.addEventListener('mouseover', function() {
        //console.log('this.id');
        let divTxt = document.createTextNode(this.id);
        div.appendChild(divTxt);
        div.style.color = 'white';
        div.style.textAlign = 'center';
    })

    div.addEventListener('mouseout', function () {
        div.innerText = '';
    });

    div.addEventListener('click', function () {
        let randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;
    })

    div.addEventListener('dblclick', function () {

    })

});

//create function random colors for squares
let color = ['blue', 'red', 'green', 'pink', 'orange', 'yellow'];

function getRandomColor() {
    let randomColor = color[Math.floor(Math.random() * color.length)];
    return randomColor;
};

//checking random numbers for color selection
//console.log(Math.floor(Math.random() * color.length));

//checking to see it is producing random colors
//console.log(getRandomColor());


    




