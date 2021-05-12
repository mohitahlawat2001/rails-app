
function populateMessageList(messageListElement) {
    let guestBookId = messageListElement.getAttribute('data-guest-book-id');
    fetch('/guest_books/${guestBookId}/messages').then((Response) =>{
         Response.text().then((text) =>{
             messageListElement.innerHTML = text;
         });
    });
}

function reloadMessageList() {
    let messageListElement = document.querySelector('.message-list');
    if (!messageListElement) {return;}
    populateMessageList(messageListElement);
}


document.addEventListener('turbolinks:load',reloadMessageList);

// setInterval(reloadMessageList,3000);