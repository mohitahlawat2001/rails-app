//alert("hi")

function modifyH1(H1) {
    H1.innerText = 'mohit';
    console.log(h1);
}

function whenReady() {
    document.querySelectorAll('h1').forEach(modifyH1);
}

document.addEventListener('turbolinks:load', whenReady);