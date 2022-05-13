import { Key } from "./key.js"

export class Keyboard {
    #notes = []
    #noteNames = 'cdefgab'
    #notesWithSharps = ['c', 'd', 'f', 'g', 'a']
    #notesArray = []
    #parent
    #masterMap = [{ id: 1, octave: 1, note: 'C' },
    { id: 2, octave: 1, note: 'C#' },
    { id: 2, octave: 1, note: 'D-' },
    { id: 3, octave: 1, note: 'D' },
    { id: 4, octave: 1, note: 'D#' },
    { id: 4, octave: 1, note: 'E-' },
    { id: 5, octave: 1, note: 'E' },
    { id: 6, octave: 1, note: 'F' },
    { id: 7, octave: 1, note: 'F#' },
    { id: 7, octave: 1, note: 'G-' },
    { id: 8, octave: 1, note: 'G' },
    { id: 9, octave: 1, note: 'G#' },
    { id: 9, octave: 1, note: 'A-' },
    { id: 10, octave: 1, note: 'A' },
    { id: 11, octave: 1, note: 'A#' },
    { id: 11, octave: 1, note: 'B-' },
    { id: 12, octave: 1, note: 'B' }]

    #notesMap = []

    constructor(size = 2) {
        this.BuildNotesMap(size);
        this.#parent = document.querySelector('#output')
        if (size > 2) {
            this.size = 2
        } else {
            this.size = size
        }

        for (let i = 0; i < this.size; i++) {
            this.#noteNames.split('').forEach(n => {
                this.#notesArray.push(n)
            })
        }

        for (let i = 0; i < this.#notesArray.length; i++) {
            let config = {}
            let curr = this.#notesArray[i]
            config.noteName = curr
            config.modifier = this.#notesWithSharps.findIndex(x => x === curr) === -1 ? 'natural' : 'sharp'
            this.#notes.push(new Key(config))
        }
        // this.DrawKeyboard() // Inital displays
    }

    DrawKeyboard(enteredNotes) {
        console.log(enteredNotes);
    }

    BuildNotesMap(size) {
        for (let index = 0; index < size; index++) {
            this.#masterMap.forEach(item => {
                this.#notesMap.push({ id: item.id + (this.#masterMap.length * index), octave: item.octave + index, note: item.note })
            })
        }
    }
}