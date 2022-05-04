import { Key } from "./key.js"

export class Keyboard {
    #notes = []
    #noteNames = 'cdefgab'
    #notesWithSharps = ['c', 'd', 'f', 'g', 'a']
    #notesArray = []
    #parent

    constructor(size = 2) {
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

    DrawKeyboard(left, right) {
        // console.log(this.#parent);
    }
}