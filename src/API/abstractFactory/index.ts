class Product1 {
    public method() {
        console.log(1)
    }
}
class Product2 {
    public method() {
        console.log(2)
    }
}

export class ConcreteFactory {
    public createProdect1() {
        return new Product1()
    }
    public createProdect2() {
        return new Product2()
    }
}

export class Tester {
    public abstract1: Product1
    public abstract2: Product2
    constructor(factory: ConcreteFactory) {
        this.abstract1 = factory.createProdect1()
        this.abstract2 = factory.createProdect2()
    }
    public test() {
        this.abstract1.method()
        this.abstract2.method()
    }
}