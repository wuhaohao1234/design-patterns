export class ConcreteComponent {
    private s: string
    constructor(s: string) {
        this.s = s
    }
    public operation() {
        console.log(this.s)
    }
}
class Decorator {
    private component: ConcreteComponent
    private id: number
    constructor(id: number, component: ConcreteComponent) {
        this.id = id
        this.component = component
    }
    public getId() {
        return this.id
    }
    public operation() {
        this.component.operation()
        console.log(this.id)
    }
}

export class ConcreteDecorator extends Decorator {
    constructor(id: number, component: ConcreteComponent) {
        super(id, component)
    }
    public operations() {
        console.log(this.getId())
        this.operation()
    }
}