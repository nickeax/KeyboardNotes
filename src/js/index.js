const notesInput = document.querySelector('#notesInput')

document.addEventListener('click', clickHandler)

function clickHandler(ev) {
    ev.preventDefault()
    switch (ev.target.id) {
        case 'addNotes':
            console.log(ev.target.id);
            break;
        default:
            console.log('Unhandled event');
    }
}