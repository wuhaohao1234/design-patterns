class ConcreteFlyweight {
    private instrinsicState: String;

    constructor(instrinsicState: String) {
        this.instrinsicState = instrinsicState;
    }

    public operation(s: String): void {
        console.log("`operation` of ConcreteFlyweight", s, " is being called!");
    }
}

export default class FlyweightFactory {
    private fliesMap: { [s: string]: ConcreteFlyweight } = {}
    constructor() {

    }
    public getFlyweight(key: string) {
        if (!this.fliesMap[key]) {
            this.fliesMap[key] = new ConcreteFlyweight(key);
        }
        return this.fliesMap[key]
    }
}