
export default class MoneyStack {
    public billSize: number // 最大数值
    public next!: MoneyStack; // 下一个对象
    // 下一个对象
    constructor(billSize: number) {
        this.billSize = billSize
    }
    public setNextStack(next: MoneyStack) {
        this.next = next
    }
    public withdraw(amount: number) {
        if (amount < this.billSize) {
            this.next.withdraw(amount)
        } else {
            console.log(Math.floor(amount / this.billSize) + '个' + this.billSize + '元')
            if (amount - Math.floor(amount / this.billSize) * this.billSize > 0) {
                this.next.withdraw(amount - Math.floor(amount / this.billSize) * this.billSize)
            }
        }
    }
}