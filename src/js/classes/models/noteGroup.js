export class NoteGroup {
    #notes = []

    constructor() { }

    AddNote(n) {
        this.#notes.push(n)
    }

    InGroup(note) {
        let test = this.#notes.find(n => n.FullName() === note.FullName())

        return test != undefined
    }

    LastAdded() {
        return this.#notes[this.#notes.length - 1]
    }

    GetNotes() {
        return this.#notes
    }

    RemoveLastNote() {
        this.#notes.pop()
    }
}