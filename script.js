const gridSize = document.querySelector('#gridSize');
gridSize.addEventListener('click',askSize);

const grid = document.querySelector('#grid');

function askSize(){
    const size = (prompt("How many boxes do you want on each side (up to 100)?"));
    makeGrid(size);
}

function makeGrid(size){
    const currentRows = Array.from(document.querySelectorAll('.row'));
    currentRows.forEach(row => row.remove());
    const row = [size]
    for(let i = 0; i < size; i++){
        row[i] = document.createElement('div');
        row[i].classList.add('row');
        grid.appendChild(row[i]);

        for(let j = 0; j < size; j++){
            const eachBox = [size];
            eachBox[j] = document.createElement('div');
            eachBox[j].classList.add('box');
            row[i].appendChild(eachBox[j]);
        }
    }
}

makeGrid(16);