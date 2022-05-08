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
/* 
1   1   1   1   1   1   1   2   2   2   2   2   2   2   3   3   3   3   3   3   3
C   D   E   F   G   A   B   C   D   E   F   G   A   B   C   D   E   F   G   A   B
1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21
*/