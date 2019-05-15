class Adaptee {
    public method() {
        console.log('这是Adaptee的方法')
    }
}

export interface ITarget {
    call(): void
}

export default class Target implements ITarget {
    public call() {
        let varAdaptee: Adaptee = new Adaptee()
        varAdaptee.method()
    }
}