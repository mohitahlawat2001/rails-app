










document.addEventListener('click', (clickEvent) => {
    let clickedElement = clickEvent.target;
    let clickedNumber = clickedElement.innerText;
       console.log('clicked',clickedNumber);

    fetch('/animals/' + clickedNumber).then((response) => {
        response.json().then((data) => {
            let sound = data.sound;
            console.log('the animal say:', sound);
        });
    });
});