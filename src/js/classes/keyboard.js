import { Key } from "./key.js"

export class Keyboard {
    #MAX_SIZE = 10
    #notes = []
    #noteNames = 'cdefgab'
    #notesWithSharps = ['c', 'd', 'f', 'g', 'a']
    #notesArray = []
    #parent
    #masterMap = [{ id: 1, octave: 1, note: 'C', modifier: 'natural' },
    { id: 2, octave: 1, note: 'C', modifier: '#' },
    { id: 2, octave: 1, note: 'D', modifier: '-' },
    { id: 3, octave: 1, note: 'D', modifier: 'natural' },
    { id: 4, octave: 1, note: 'D', modifier: '#' },
    { id: 4, octave: 1, note: 'E', modifier: '-' },
    { id: 5, octave: 1, note: 'E', modifier: 'natural' },
    { id: 6, octave: 1, note: 'F', modifier: 'natural' },
    { id: 7, octave: 1, note: 'F', modifier: '#' },
    { id: 7, octave: 1, note: 'G', modifier: '-' },
    { id: 8, octave: 1, note: 'G', modifier: 'natural' },
    { id: 9, octave: 1, note: 'G', modifier: '#' },
    { id: 9, octave: 1, note: 'A', modifier: '-' },
    { id: 10, octave: 1, note: 'A', modifier: 'natural' },
    { id: 11, octave: 1, note: 'A', modifier: '#' },
    { id: 11, octave: 1, note: 'B', modifier: '-' },
    { id: 12, octave: 1, note: 'B', modifier: 'natural' }]

    #notesMap = []

    constructor({ size }) {
        this.#parent = document.querySelector('#output')
        if (size > this.#MAX_SIZE) {
            this.size = this.#MAX_SIZE
        } else {
            this.size = size
        }
        this.BuildNotesMap();

        for (let i = 0; i < this.size; i++) {
            this.#noteNames.split('').forEach(n => {
                this.#notesArray.push(n)
            })
        }

        for (let i = 0; i < this.#masterMap.length; i++) {
            let config = {}
            let curr = this.#notesArray[i]
            config.noteName = curr
            config.modifier = this.#notesWithSharps.findIndex(x => x === curr) === -1 ? 'natural' : 'sharp'
            this.#notes.push(new Key(config))
        }
        // this.DrawKeyboard() // Inital displays
    }

    DrawKeyboard(groups) {
        for (let i = 0; i < this.#notesMap.length; i++) {
            console.log(this.#notesMap[i]);
        }
    }

    BuildNotesMap() {
        for (let index = 0; index < this.size; index++) {
            this.#masterMap.forEach(item => {
                this.#notesMap.push({ id: item.id + (this.#masterMap.length * index), octave: item.octave + index, note: item.note, modifier: item.modifier })
            })
        }
    }
}