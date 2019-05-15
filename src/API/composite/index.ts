export class Leaf {
    private s: string
    constructor(s: string) {
        this.s = s
    }
    public operation() {
        console.log(this.s)
    }
}

export class Composite {
    private list: Leaf[]
    private s: string
    constructor(s: string) {
        this.s = s
        this.list = []
    }
    public add(c: Leaf) {
        this.list.push(c)
        return this
    }
    public remove(i: number) {
        if (this.list.length <= i) {
            throw new Error("index out of bound!");
        }
        this.list.splice(i, 1);
    }
    public operation() {
        this.list.forEach((item) => {
            item.operation()
        })
    }
}