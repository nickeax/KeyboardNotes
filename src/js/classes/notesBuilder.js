import { Keyboard } from "./keyboard.js"
import { Note } from "./models/note.js";

export class NotesBuilder {
    notesInput = document.querySelector('#notesInput')
    notesDisplay = document.querySelector('#notesDisplay')
    allowedNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    accidentals = ['#', '+', '-']
    allAllowed = this.allowedNotes.concat(this.accidentals)

    constructor() { }

    ProcessRawInput(str) {
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

    BuildNotes(str) {
        console.clear()
        let accidentalFlag = false
        let notes = []
        let arr = str.split('')
        arr = arr.map(letter => letter.toUpperCase())
        arr = arr.filter(x => this.allAllowed.indexOf(x) !== -1)

        for (let i = 0; i < arr.length; i++) {
            let isAccidental = this.accidentals.indexOf(arr[i]) !== -1
            if (accidentalFlag == true && isAccidental) {
                continue
            }
            if (!isAccidental) {
                accidentalFlag = false
                notes.push(new Note({ name: arr[i], modifier: 'natural' }))
            }
            if (isAccidental && !accidentalFlag) {
                accidentalFlag = true
                let noteToTranslate = notes[notes.length - 1].name
                notes[notes.length - 1] = new Note({ name: noteToTranslate, modifier: arr[i] })
            }
        }

        return notes
    }
}