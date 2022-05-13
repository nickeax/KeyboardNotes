import { Keyboard } from "./classes/keyboard.js";
import { NoteGroup } from "./classes/models/noteGroup.js";
import { NotesBuilder } from "./classes/notesBuilder.js";
import { NotesHandler } from './classes/notesHandler.js'

document.addEventListener('input', inputHandler)
const notesHandler = new NotesHandler()

const KB = new Keyboard(4)

function inputHandler(ev) {
    const nb = new NotesBuilder(new NoteGroup)
    let rawString = nb.ProcessRawInput(notesInput.value)
    let notesArr = nb.BuildNotes(rawString)
    KB.DrawKeyboard(notesArr)
    let op = ''
    notesArr.forEach(n => {
        op += `<strong>${n.name}</strong><sup style="min-width: 3rem; display:inline-block;">${n.modifier}</sup> Octave:${n.GetOctave()}<hr>`
    })

    notesDisplay.innerHTML = op
}