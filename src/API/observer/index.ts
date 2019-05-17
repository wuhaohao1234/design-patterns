export class ConcreteObserver {
    public name: string
    public num!: number;
    constructor(name: string) {
        this.name = name
    }
    public notify() {
        console.log(this.num)
        console.log(this.name)
    }
}
export class Observer {
    private observers: ConcreteObserver[] = [];
    public register(observer: ConcreteObserver) {
        console.log('注册了一个观察者')
        this.observers.push(observer)
    }
    public dispatch() {
        // 改变
        this.observers.forEach((item: ConcreteObserver, key: number) => {
            item.num = key
            item.notify()
        })
    }
}