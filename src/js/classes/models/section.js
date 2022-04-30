export class Section {
    notes = []
    constructor(str = 'BLANK', parent) {
        if (!str) {
            this.notes.push('BLANK')
        } else
            this.notes = str.split(' ')
    }

    DisplayNotes() {
        return this.notes.map(n => `[${n}]`).join('')
    }
}