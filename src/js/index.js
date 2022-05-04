import { NotesHandler } from './classes/notesHandler.js'
import { Keyboard } from "./classes/keyboard.js";

const notesInput = document.querySelector('#notesInput')
const notesDisplay = document.querySelector('#notesDisplay')
const notesHandler = new NotesHandler(notesDisplay, new Keyboard());

document.addEventListener('input', inputHandler)

function inputHandler(ev) {
    // console.clear()
    notesHandler.Clear()
    let input = notesInput.value
    if (input.length > 0) {
        let lines = input.split('\n')
        if (lines.length > 0) {
            lines.forEach(l => {
                notesHandler.GetLeftHandRightHand(l)
            });
        } else {
            notesHandler.GetLeftHandRightHand(l)
        }
        notesHandler.DisplayLeftRightHand(notesDisplay);
    }
}

function clickHandler(ev) {
    ev.preventDefault()
    switch (ev.target.id) {
        case 'addNotes':
            let input = notesInput.value
            if (input.length > 0) {
                let lines = input.split('\n')
                if (lines.length > 0) {
                    lines.forEach(l => {
                        notesHandler.GetLeftHandRightHand(l)
                    });
                } else {
                    notesHandler.GetLeftHandRightHand(l)
                }
                notesHandler.DisplayLeftRightHand(notesDisplay);
            }
            break;
        default:
            console.log('Unhandled event');
    }
}