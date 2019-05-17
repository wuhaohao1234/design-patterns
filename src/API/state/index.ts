interface IState {
    handle(context: Contexts): void;
}
export class ConcreteStateA implements IState {
    public handle(context: Contexts): void {
        console.log("`handle` method of ConcreteStateA is being called!");
        context.state = new ConcreteStateB();
    }
}
export class ConcreteStateB implements IState {
    public handle(context: Contexts): void {
        console.log("`handle` method of ConcreteStateB is being called!");
        context.state = new ConcreteStateA();
    }
}
export class Contexts {
    public state: IState
    constructor(state: IState) {
        this.state = state
    }
    public request() {
        this.state.handle(this);
    }
}