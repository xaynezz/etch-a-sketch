// Color Picker 
let colorPicker = document.querySelector('#color-picker');
colorPicker.value = "#1B2430";
colorPicker.addEventListener('input', () => {
    document.documentElement.style.setProperty('--color-3', colorPicker.value);
})

// Dark Mode Button
let modeButton = document.querySelector('.mode');
modeButton.addEventListener('click', () => {
    boardSet(20);
    document.body.classList.toggle('dark-mode');
    if (modeButton.innerHTML == "Light") {
        modeButton.innerHTML = "Dark";
        colorPicker.value = "#1B2430";
        document.documentElement.style.setProperty('--color-3', "#1B2430");
    } else {
        modeButton.innerHTML = "Light";
        colorPicker.value = "#EEEEEE";
        document.documentElement.style.setProperty('--color-3', "#EEEEEE");
    }
});

// Clear Button
let result = 20;
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    boardSet(result);
})

// Eraser Button
let eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click', () => {
    if (modeButton.innerHTML == "Light") {
        colorPicker.value = "#1B2430";
        document.documentElement.style.setProperty('--color-3', "#1B2430");
    } else {
        colorPicker.value = "#EEEEEE";
        document.documentElement.style.setProperty('--color-3', "#EEEEEE");
    }
})

// Board Size Selector
let sizeButton = document.querySelector('.size-selector');
sizeButton.addEventListener('click', () => {
    let result = prompt("Enter a size:");
    boardSet(result);
    let clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', () => {
        boardSet(result);
    });
})


// Board Size Logic
function boardSet(size) {
    let board = document.querySelector('.board');
    // clearing and creating new divs on board
    board.textContent= "";
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add(`row${i}`);
        row.draggable = false;
        for (let j = 0; j < size; j++) {
            let column = document.createElement("div");
            column.classList.add('column');
            column.draggable = false;
            row.append(column);
        }
        board.append(row);
    }
    // changing color-3 in css file
    document.documentElement.style.setProperty('--color-3', colorPicker.value);

    // changing size of divs to fit board
    document.documentElement.style.setProperty('--side', size);

    // reset drawing logic
    drawLogic();
}

// Painting Logic
function drawLogic() {
    let all = document.querySelectorAll('.column');
    let mouseDown = false
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)

    all.forEach((temp) => {
        temp.addEventListener('mouseenter', () => {
            if (mouseDown) {
                temp.style.setProperty('background-color', colorPicker.value);
            }
        });
});
}

// Call start conditions
boardSet(20);
