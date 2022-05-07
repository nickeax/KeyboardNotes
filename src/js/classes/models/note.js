export class Note {
    translatableSharps = ['B', 'E']
    translatableFlats = ['C', 'F']
    translateFlats = { F: 'E', C: 'B' }
    translateSharps = { B: 'C', E: 'F' }
    accidentals = ['#', '+', '-']
    name = ''
    modifier = ''
    constructor({ name, modifier }) {
        console.log(name);
        if (modifier === '#' && this.translatableSharps.indexOf(name) !== -1) {
            this.name = this.translateSharps[name]
            this.modifier = 'natural'
        } else if (modifier === '-' && this.translatableFlats.indexOf(name) !== -1) {
            this.name = this.translateFlats[name]
            this.modifier = 'natural'
        } else {
            this.name = name
            this.modifier = modifier
        }
    }
}