export class Context {}
export class TerminalExpression {
    public interpret(context: Context) {
        console.log("`interpret` method of TerminalExpression is being called!");
    }
}