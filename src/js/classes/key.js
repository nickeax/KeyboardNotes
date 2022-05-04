export class Key {
    noteName = '';
    modifier = '';
    active = false;
    leftHand = false;

    constructor(conf) {
        this.noteName = conf.noteName;
        this.modifier = conf.modifier;
    }
}
