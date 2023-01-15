const gridSize = document.querySelector('#gridSize');
gridSize.addEventListener('click',askSize);

const grid = document.querySelector('#grid');

function askSize(){
    const size = (prompt("How many boxes do you want on each side (up to 100)?"));
    makeGrid(size);
}

function makeGrid(size){
    const hAndW = 960/size;
    const currentRows = Array.from(document.querySelectorAll('.row'));
    currentRows.forEach(row => row.remove());
    const row = [size]
    for(let i = 0; i < size; i++){
        row[i] = document.createElement('div');
        row[i].classList.add('row');
        row[i].style.display = 'flex';
        row[i].style.width = '960px';
        row[i].style.height = hAndW + 'px';
        grid.appendChild(row[i]);

        for(let j = 0; j < size; j++){
            const eachBox = [size];
            eachBox[j] = document.createElement('div');
            eachBox[j].classList.add('box');
            eachBox[j].style.width = hAndW + 'px';
            eachBox[j].style.height = hAndW + 'px';
            eachBox[j].style.backgroundColor = '#ffffff';
            eachBox[j].addEventListener('mouseover', function() {
                let n = Math.round((Math.random() * 0xfffff * 1000000)).toString(16);
                eachBox[j].style.backgroundColor = '#' + n.substring(0,6);
            })

            eachBox[j].addEventListener('mouseout', function() {                
                setTimeout(() => {
                    eachBox[j].style.backgroundColor = '#ffffff'
                  }, 1000);
            })

            row[i].appendChild(eachBox[j]);
        }
    }
}

makeGrid(16);