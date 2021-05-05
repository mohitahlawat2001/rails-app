

function whatTodoWhenTheJSONComeBack(data) {
    let sound = data.sound;
    console.log('the animal say:', sound);
}

function whatTodo(response) {
    response.json().then(whatTodoWhenTheJSONComeBack);
}



function handleClick(clickEvent) {
    let clickedElement = clickEvent.target;
    let clickedNumber = clickedElement.innerText;
       console.log('clicked',clickedNumber);

    fetch('/animals/' + clickedNumber).then(whatTodo)
}


document.addEventListener('click', handleClick);