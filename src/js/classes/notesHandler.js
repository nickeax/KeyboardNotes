import { Section } from './models/section.js'

export class NotesHandler {
    constructor(el) {
        this.el = el
        this.leftHandSections = []
        this.rightHandSections = []
    }

    GetLeftHandRightHand(str) {
        let leftRight = str.split('|')
        this.leftHandSections.push(new Section(leftRight[0].trim()))
        this.rightHandSections.push(new Section(leftRight[1]?.trim()))
    }

    DisplayLeftRightHand() {
        console.log(this.el);
        let output = '<table><thead><th>Left Hand Notes</th><th>Right Hand Notes</th></thead>'

        for (let i = 0; i < this.leftHandSections.length; i++) {
            console.log(this.leftHandSections[i]);
            output += `<tr><td>${this.leftHandSections[i].DisplayNotes()}</td><td>${this.rightHandSections[i]?.DisplayNotes()}</td></tr>`
        }

        output += '</table>'
        console.log(this.el);
        this.el.innerHTML = output
    }

    Clear() {
        this.leftHandSections = []
        this.rightHandSections = []
        this.el.innerHTML = ''
    }
}