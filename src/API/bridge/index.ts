export interface Implementor {
    callee(s: any): void;
}
export class ConcreteImplementorA implements Implementor {
    public callee(s: any) {
        console.log('concreteImplementorA')
        console.log(s)
    }
}
class Abstraction {
    public implementor: Implementor;
    constructor(imp: Implementor) {
        this.implementor = imp;
    }

    public callIt(s: String): void {
        throw new Error("This method is abstract!");
    }
}

export class RefinedAbstractionA extends Abstraction {
    constructor(imp: Implementor) {
        super(imp)
    }
    public callIt() {
        this.implementor.callee('s')
    }
}