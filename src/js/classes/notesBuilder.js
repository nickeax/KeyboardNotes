import { Note } from "./models/note.js";
import { NoteGroup } from "./models/noteGroup.js";

export class NotesBuilder {
    notesInput = document.querySelector('#notesInput')
    notesDisplay = document.querySelector('#notesDisplay')
    noteGroups = []

    constructor({ ng }) {
        this.noteGroups.push(new NoteGroup())
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
        let noteGroups = []
        let arr = str.split('')
        arr = arr.map(letter => letter.toUpperCase())
        arr = arr.filter(x => allAllowed.indexOf(x) !== -1)

        for (let i = 0; i < arr.length; i++) {
            let isAccidental = accidentals.indexOf(arr[i]) !== -1
            if (accidentalFlag == true && isAccidental) {
                continue
            }
            if (!isAccidental) {
                accidentalFlag = false
                let newNote = new Note({ name: arr[i], modifier: 'natural' })
                if (this.noteGroups[this.noteGroups.length - 1].InGroup(newNote)) {
                    let ng = new NoteGroup()
                    ng.AddNote(newNote)
                    this.noteGroups.push(ng)
                } else {
                    this.noteGroups[this.noteGroups.length - 1].AddNote(newNote)
                }
            }
            if (isAccidental && !accidentalFlag) {
                accidentalFlag = true
                let noteToTranslate = this.GetLastGroup().LastAdded().NoteName()
                let newNote = new Note({ name: noteToTranslate, modifier: arr[i] })
                if (this.noteGroups[this.noteGroups.length - 1].InGroup(newNote)) {
                    let ng = new NoteGroup();
                    ng.AddNote(newNote)
                    this.noteGroups.push(ng)
                } else {
                    this.noteGroups[this.noteGroups.length - 1].RemoveLastNote()
                    this.noteGroups[this.noteGroups.length - 1].AddNote(newNote)
                }
            }
        }

        return this.noteGroups
    }

    GetLastGroup() {
        return this.noteGroups[this.noteGroups.length - 1]
    }
}