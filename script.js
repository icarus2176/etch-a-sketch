const gridSize = document.querySelector('#gridSize');
gridSize.addEventListener('click',askSize);

const grid = document.querySelector('#grid');

function askSize(){
    const size = parseint(prompt("How many boxes do you want on each side (up to 100)?"));
    makeGrid(size);
}

function makeGrid(size){
    
}