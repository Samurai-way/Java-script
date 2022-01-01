let countMove = 0;
document.querySelector(".box").addEventListener('mouseover', function () {
    countMove++;
    if (countMove == 1) {
        event.target.style.backgroundColor = 'red';
    }
    else if (countMove == 2) {
        event.target.style.backgroundColor = 'yellow';
    }
    else if (countMove == 3) {
        event.target.style.backgroundColor = 'green';
        countMove = 0;
    }
})

document.querySelector('.box').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = `rgb(116, 0, 116)`;
})
