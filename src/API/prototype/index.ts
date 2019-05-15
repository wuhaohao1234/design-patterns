interface IPrototype {
    clone(): IPrototype
    toString(): string
}
export class Concrete implements IPrototype {
    public clone() {
        return new Concrete()
    }
    public toString() {
        return 'Concrete'
    }
}

export class Builder {
    private prototypeMap: {[s: string]: IPrototype} = {}
    constructor() {
        this.prototypeMap['c1'] = new Concrete()
    }
    public createOne(s: string) {
        return this.prototypeMap[s].clone()
    }
}