export class Receiver {
    public action() {
        console.log('行为')
    }
}

class Command {
    public execute() {
        throw new Error("Abstract method!");
    }
}

export class ConcreteCommand1 extends Command {
    private receiver: Receiver
    // tslint:disable-next-line:no-shadowed-variable
    constructor(receiver: Receiver) {
        super()
        this.receiver = receiver
    }
    public execute() {
        console.log("`execute` method of ConcreteCommand1 is being called!");
        this.receiver.action()
    }
}

export class Invoker {
    private commands: Command[]
    constructor() {
        this.commands = []
    }
    public storeAndExecute(cmd: Command) {
        this.commands.push(cmd);
        cmd.execute();
    }
}
