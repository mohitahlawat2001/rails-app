//alert("congrationalation")
// function turnBoxBlue(element) {
//     element.style.backgroundColor = 'blue';
// }

// function onPageLoad() {
//     let boxes = document.querySelectorAll('.box');
//     boxes.forEach( (element) => {
//         element.style.backgroundColor = 'blue';
//     });
// }

// function boxClicked(clickEvent) {
//     let clickedElement = clickEvent.target;
//     if (clickedElement.tagName === 'DIV') {
//         clickedElement.style.backgroundColor = 'orange';
//     }
//}

document.addEventListener('click' , (clickEvent) => {
    let clickedElement = clickEvent.target;

    updateTime(clickedElement);
    if (clickedElement.tagName === 'DIV') {
        if (clickedElement.style.backgroundColor === 'orange'){
            clickedElement.style.backgroundColor = 'blue';
        } else{
        clickedElement.style.backgroundColor = 'orange';
        }
    }
});

document.addEventListener('turbolinks:load' , () => {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach( (element) => {
        element.style.backgroundColor = 'blue';
    });
});

function updateTime(elementToUpdate) {
fetch('/time').then((response) => {
    response.text().then( (text) => {
        elementToUpdate.innerText = text;
    });
});
}