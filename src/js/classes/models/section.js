export class Section {
    notes = []
    constructor(str) {
        this.notes.push(str.split(' '))
    }
}