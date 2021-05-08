










document.addEventListener('click', (clickEvent) => {
    let clickedElement = clickEvent.target.closest('.animal');
    // let numberElement = clickedElement.querySelector('.animal-number');
    // let clickedNumber = numberElement.innerText;

    let animalNumber  = clickedElement.getAttribute('data-animal-number');

       console.log('clicked', animalNumber);

    fetch('/animals/' + animalNumber).then((response) => {
        response.text().then((text) => {
            //let sound = data.sound;

            clickedElement.innerHTML = text ;
            // console.log('the animal say:', text);
            //numberElement.innerText = sound ;
        });
    });
});