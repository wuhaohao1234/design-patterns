interface IMediator {
    send(msg: string, colleague: Colleague): void;
}
class Colleague {
    public mediator: IMediator;
    constructor(mediator: IMediator) {
        this.mediator = mediator
    }
    public send(msg: string) {
        throw new Error("Abstract Method!");
    }
    public receive(msg: string): void {
        throw new Error("Abstract Method!");
    }
}
export class ConcreteColleagueA extends Colleague {
    constructor(mediator: IMediator) {
        super(mediator)
    }
    public send(msg: string) {
        this.mediator.send(msg, this)
    }
    public receive(msg: string): void {
        console.log(msg, "`receive` of ConcreteColleagueA is being called!");
    }
}

export class ConcreteColleagueB extends Colleague {
    constructor(mediator: IMediator) {
        super(mediator);
    }

    public send(msg: string): void {
        this.mediator.send(msg, this);
    }

    public receive(msg: string): void {
        console.log(msg, "`receive` of ConcreteColleagueB is being called!");
    }
}

export class ConcreteMediator implements IMediator {
    public concreteColleagueA!: ConcreteColleagueA;
    public concreteColleagueB!: ConcreteColleagueB;
    public send(msg: string, colleague: Colleague) {
        if (this.concreteColleagueA === colleague) {
            this.concreteColleagueB.receive(msg);
        } else {
            this.concreteColleagueA.receive(msg);
        }
    }
}