
function populateMessageList(messageListElement) {
    let guestBookId = messageListElement.getAttribute('data-guest-book-id');
    fetch('/guest_books/${guestBookId}/guest_book_entries').then( (Response) =>{
         Response.text().then((text) =>{
             messageListElement.innerHTML = text;
         });
    });
}

function pageLoaded() {
    let messageListElement = document.querySelector('.message-list');
    populateMessageList(messageListElement);
}


document.addEventListener('turbolinks:load',pageLoaded);