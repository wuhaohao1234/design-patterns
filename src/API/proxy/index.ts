class RealSubject {
    private s: string;

    constructor(s: string) {
        this.s = s;
    }
    public doAction(): void {
        console.log("`doAction` of RealSubject", this.s, "is being called!");
    }
}

export default class Proxy {
    private realsubject: RealSubject | undefined
    public doAction() {
        if (this.realsubject === null || this.realsubject === undefined) {
            this.realsubject = new RealSubject('代理')
        }
        this.realsubject.doAction()
    }
}