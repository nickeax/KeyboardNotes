export class NoteGroup {
    notes = []

    constructor(fullNote) {
        this.notes.push(fullNote)
    }

    InGroup(note) {
        return this.notes.indexOf(note)
    }
}