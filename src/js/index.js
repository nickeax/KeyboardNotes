import { NotesHandler } from './classes/notesHandler.js'
import { Keyboard } from "./classes/keyboard.js";

const notesInput = document.querySelector('#notesInput')
const notesDisplay = document.querySelector('#notesDisplay')
const notesHandler = new NotesHandler(notesDisplay, new Keyboard());
const allowedNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const accidentals = ['#', '+', '-']
const allAllowed = allowedNotes.concat(accidentals)

document.addEventListener('input', inputHandler)

function inputHandler(ev) {
    let rawString = ProcessRawInput(notesInput.value)
    let notesArr = BuildNotes(rawString)
    notesHandler.DisplayLeftRightHand(notesDisplay);
}

function ProcessRawInput(str) {
    let spaceless = ''

    if (str.length > 0) {
        let lines = str.split('\n')
        if (lines.length > 0) {
            lines.forEach(l => {
                let inputArr = l.split(' ') // Remove spaces
                spaceless = inputArr.join('')
            });
        }
    }

    return spaceless
}

function BuildNotes(str) {
    console.clear()
    let accidentalDetected = false
    let notes = []
    let arr = str.split('')
    arr = arr.map(letter => letter.toUpperCase())
    arr = arr.filter(x => allAllowed.indexOf(x) !== -1)

    for (let i = 0; i < arr.length; i++) {
        if (accidentalDetected != true) {
            if (accidentals.indexOf(arr[i]) !== -1) {
                accidentalDetected = true
                console.log(arr[i]);
                // console.log(`${arr[i]} is a note!`)
            } else {
                accidentalDetected = false
                console.log(arr[i]);
            }
        }
    }
}