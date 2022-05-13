import { Keyboard } from "./keyboard.js"
import { Note } from "./models/note.js";

export class NotesBuilder {
    notesInput = document.querySelector('#notesInput')
    notesDisplay = document.querySelector('#notesDisplay')
    static currentOctave = 0

    constructor() {
        this.currentOctave = 0
    }

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
        const allowedNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        const accidentals = ['#', '+', '-']
        const allAllowed = allowedNotes.concat(accidentals)
        let accidentalFlag = false
        let notes = []
        let arr = str.split('')
        arr = arr.map(letter => letter.toUpperCase())
        arr = arr.filter(x => allAllowed.indexOf(x) !== -1)
        let octaveTracker = []
        let highestOctaves = []

        for (let i = 0; i < arr.length; i++) {
            let octave = 0
            let isAccidental = accidentals.indexOf(arr[i]) !== -1
            if (accidentalFlag == true && isAccidental) {
                continue
            }
            if (!isAccidental) {
                accidentalFlag = false
                let newNote = new Note({ name: arr[i], modifier: 'natural' })
                octaveTracker.push(newNote.ToString())
                if ()
                    newNote.octave = octaveTracker.filter(x => x === newNote.ToString()).length
                notes.push(newNote)
            }
            if (isAccidental && !accidentalFlag) {
                accidentalFlag = true
                let noteToTranslate = notes[notes.length - 1].name
                let newNote = new Note({ name: noteToTranslate, modifier: arr[i] })
                octaveTracker.push(newNote.ToString())
                newNote.octave = octaveTracker.filter(x => x === newNote.ToString()).length
                notes[notes.length - 1] = newNote
                // Remove natural note that was translated
                octaveTracker.splice(octaveTracker.indexOf(`${noteToTranslate}natural`), 1)
            }
            highestOctaves.push(this.FindHighestOctave(notes))
            console.log(highestOctaves);
        }

        return notes
    }

    FindHighestOctave(arr) { // Find the highest octave count in the notes array
        let maxOctave = 1

        arr.forEach(x => {
            if (x.octave > maxOctave) {
                maxOctave = x.octave
            }
        })

        return maxOctave
    }

    IsNoteInOctave(n) {

    }
}