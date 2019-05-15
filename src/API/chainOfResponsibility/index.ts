class Handler {
    private handler: Handler | undefined 
    private req: number
    constructor(req: number) {
        // 10
        this.req = req
    }
    public setHandler(handler: Handler) {
        this.handler = handler
    }
    public operation(msg: string, req: number) {
        if (req < this.req) {
            this.handlerRequest(msg)
        } else if (this.handler) {
            this.handler.operation('错误', 3)
        }
    }
    public handlerRequest(msg: string) {
        console.log(msg)
        throw new Error('错误')
    }
}
export default class ConcreteHandler1 extends Handler {
    constructor(req: number) {
        super(req);
    }
    public handlerRequest(msg: string) {
        console.log("Message (ConcreteHandler1) :: ", msg);
    }
}