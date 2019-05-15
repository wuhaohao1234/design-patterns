export interface IClass {
    method(): void 
}
class Product1 implements IClass {
    public method() {
        console.log('Product1')
    }
}
class Product2 implements IClass {
    public method() {
        console.log('Product2')
    }
}
const createProduct = (type: number): IClass => {
    if (type === 1) {
        return new Product1()
    } else {
        return new Product2()
    }
}

export default createProduct