import { Keyboard } from "./classes/keyboard.js";
import { NoteGroup } from "./classes/models/noteGroup.js";
import { NotesBuilder } from "./classes/notesBuilder.js";
import { NotesHandler } from './classes/notesHandler.js'

document.addEventListener('input', inputHandler)
const notesHandler = new NotesHandler()

function inputHandler(ev) {
    const nb = new NotesBuilder(new NoteGroup)
    let rawString = nb.ProcessRawInput(notesInput.value)
    let groups = nb.BuildNotes(rawString)
    const KB = new Keyboard({ size: groups.length })
    KB.DrawKeyboard(groups)
    let op = ''

    notesDisplay.innerHTML = op
}

// op += `<strong>${n.NoteName()}</strong><sup style="min-width: 3rem; display:inline-block;">${n.Modifier()}</sup> - Octave: ${i + 1}<hr>`

