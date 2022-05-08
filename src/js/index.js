import { Keyboard } from "./classes/keyboard.js";
import { NotesBuilder } from "./classes/notesBuilder.js";
import { NotesHandler } from './classes/notesHandler.js'

document.addEventListener('input', inputHandler)
const notesHandler = new NotesHandler()

const KB = new Keyboard(4)

function inputHandler(ev) {
    const nb = new NotesBuilder()
    let rawString = nb.ProcessRawInput(notesInput.value)
    let notesArr = nb.BuildNotes(rawString)
    notesHandler.DisplayLeftRightHand(notesDisplay);
    let op = ''
    notesArr.forEach(n => {
        console.log(n.name, n.modifier);
        op += `${n.name}${n.modifier}<hr>`
    })

    notesDisplay.innerHTML = op
}