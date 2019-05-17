class ConcreteIterator {
    private collection: any[] = [];
    private position: number = 0;

    constructor(collection: any[]) {
        this.collection = collection;
    }

    public next(): any {
        // Error handling is left out
        let result = this.collection[this.position];
        this.position += 1;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

export default class Numbers {
    private collection: number[] = []
    constructor(collection: number[]) {
        this.collection = collection
    }
    public createIterator() {
        return new ConcreteIterator(this.collection)
    }
}