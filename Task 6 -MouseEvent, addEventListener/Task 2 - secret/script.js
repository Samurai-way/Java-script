document.querySelector('.box').addEventListener('mouseover', function(){
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'blue';
    event.target.textContent = 'Хочеш знати який?'
})

document.querySelector('.box').addEventListener('mouseout', function(){
    event.target.style.backgroundColor = 'rgb(116, 0, 116)';
    event.target.style.color = 'blue';
    event.target.textContent = 'У мене є секрет!'
})

document.querySelector('.box').addEventListener('mousedown', function(){
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    event.target.textContent = 'А я тобі не скажу!'
})

document.querySelector('.box').addEventListener('mouseup', function(){
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'blue';
    event.target.textContent = 'Хочеш знати який?'
})


