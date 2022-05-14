export class Note {
    #name = ''
    #modifier = ''
    constructor({ name, modifier }) {
        const translatableSharps = ['B', 'E']
        const translatableFlats = ['C', 'F']
        const translateFlats = { F: 'E', C: 'B' }
        const translateSharps = { B: 'C', E: 'F' }

        if (modifier === '#' && translatableSharps.indexOf(name) !== -1) {
            this.#name = translateSharps[name]
            this.#modifier = 'natural'
        } else if (modifier === '-' && translatableFlats.indexOf(name) !== -1) {
            this.#name = translateFlats[name]
            this.#modifier = 'natural'
        } else {
            this.#name = name
            this.#modifier = modifier
        }
    }

    FullName() {
        return `${this.#name}${this.#modifier}`
    }

    NoteName() {
        return `${this.#name}`
    }

    Modifier() {
        return this.#modifier
    }
}
/* 
1   1   1   1   1   1   1   2   2   2   2   2   2   2   3   3   3   3   3   3   3
C   D   E   F   G   A   B   C   D   E   F   G   A   B   C   D   E   F   G   A   B
1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21
*/