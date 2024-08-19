$(function(){
    // Hover function
    $('.grid-item').hover(
        function() {
            // Mouse enters
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            // Mouse leaves
            $(this).css('transform', 'scale(1)');
        }
    );
});

let grid = [];
let tempArr = [];
let count = 1;

for (let i = 0; i < 1028; i++) {
    if (i < 55 || i > 832) {
        tempArr.push('.');
        count++;
    } else if (i >= 51 && i <= 832) {
        if(i == 517) {
            tempArr.push('X')
            count++;
        } else {
            tempArr.push('#');
            count++;
        }
    }

    if (count == 8) {
        grid.push(tempArr);
        tempArr = [];
        count = 1;
    }
}

// Make the HTML strings
let gridHTML = '';
for (let row of grid) {
    for (let item of row) {
        if (item == '.') {
            gridHTML += `<div class="grid-item" style="background-color: crimson;">${item}</div>`;
        } else if (item == '#') {
            gridHTML += `<div class="grid-item" style="background-color: orange;">${item}</div>`;
        } else if (item == 'X') {
            gridHTML += `<div class="grid-item" style="background-color: green;">${item}</div>`;
        }
    }
}

// Insert grid HTML into the container
document.getElementById('grid').innerHTML = gridHTML;
