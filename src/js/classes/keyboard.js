class Key {
    noteName = ''
    modifier = ''
    active = false
    leftHand = false

    constructor(conf) {
        this.noteName = conf.noteName
        this.modifier = conf.modifier
    }
}

export class Keyboard {
    #notes = []
    #noteNames = 'cdefgab'
    #notesWithSharps = ['c', 'd', 'f', 'g', 'a']
    #notesArray = []
    #parent

    constructor(size = 2) {
        console.log(size);
        this.#parent = document.querySelector('#keyboard')
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
        this.DrawKeyboard()
    }

    DrawKeyboard() {
        this.#notes.forEach(x => {
            let key = document.createElement('div')
            key.classList.add('key')
            if (x.modifier === 'sharp') {
                key.classList.add('sharp')
            }
            this.#parent.appendChild(key)
        })
    }

    AddSelections(str) {

    }
}