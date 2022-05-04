import { Section } from './models/section.js'
export class NotesHandler {
    constructor(el, kb) {
        this.kb = kb
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
        this.leftHandSections.forEach(x => {
            this.kb.DrawKeyboard(this.leftHandSections, this.rightHandSections)
        })
    }

    Clear() {
        this.leftHandSections = []
        this.rightHandSections = []
        this.el.innerHTML = ''
    }
}