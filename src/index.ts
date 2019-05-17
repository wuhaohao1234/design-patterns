import Singleton from './API/singletonPattern'
import { ConcreteFactory, Tester } from './API/abstractFactory'
import createProduct from './API/factoryMethod'
import { UserBuider, User } from './API/builder'
import { Builder } from './API/prototype'
import Target from './API/adaptee'
import { ConcreteImplementorA, RefinedAbstractionA } from './API/bridge'
import { Composite, Leaf } from './API/composite'
import { ConcreteComponent, ConcreteDecorator } from './API/decorator'
import Facade from './API/facade'
import FlyweightFactory from './API/flyweight'
import Proxy from './API/proxy'
import MoneyStack from './API/chainOfResponsibility'
import { Receiver, ConcreteCommand1, Invoker } from './API/command'
import {Context, TerminalExpression} from './API/interpreter'
import Numbers from './API/iterator'
import {ConcreteColleagueA, ConcreteColleagueB, ConcreteMediator} from './API/mediator'
import {ConcreteObserver, Observer} from './API/observer'
import {ConcreteStateA, ConcreteStateB, Contexts} from './API/state'

console.log('单例模式')

let singleton1 = Singleton.getInstance()

let singleton2 = Singleton.getInstance()

console.log(singleton1 === singleton2)

console.log('抽象工厂模式')

let concreteFactory = new ConcreteFactory()

let tester = new Tester(concreteFactory)

tester.test()

console.log('工厂模式')

let product1 = createProduct(1)
let product2 = createProduct(2)

product1.method()
product2.method()

console.log('建造者模式')

let userBuider = new UserBuider('user')

console.log(userBuider.setAge(12).Name)

let user = new User(userBuider)

console.log(user.Name)

console.log(user.Age)

console.log('原型模式')

let builder = new Builder()

let c1 = builder.createOne('c1')
console.log(c1.toString())

console.log('适配器模式')

new Target().call()

console.log('桥模式')

let concreteImplementorA = new ConcreteImplementorA()
let refinedAbstractionA = new RefinedAbstractionA(concreteImplementorA)
refinedAbstractionA.callIt()

console.log('合成模式')
let leaf1 = new Leaf('1')
let leaf2 = new Leaf('2')
let leaf3 = new Leaf('3')

let composite = new Composite('合成')

composite.add(leaf1).add(leaf2).add(leaf3).operation()

console.log('装饰器模式')

new ConcreteDecorator(1, new ConcreteComponent('s')).operations()

console.log('外观模式')

new Facade().operation1().operation2()

console.log('享元模式')

new FlyweightFactory().getFlyweight('one').operation('字符串')

console.log('代理模式')

new Proxy().doAction()

console.log('责任链模式')

let stack1 = new MoneyStack(1)
let stack5 = new MoneyStack(5)
let stack10 = new MoneyStack(10)
let stack20 = new MoneyStack(20)
let stack50 = new MoneyStack(50)
let stack100 = new MoneyStack(100)

stack100.setNextStack(stack50)
stack50.setNextStack(stack20)
stack20.setNextStack(stack10)
stack10.setNextStack(stack5)
stack5.setNextStack(stack1)

stack100.withdraw(3)

console.log('命令模式')

let receiver: Receiver = new Receiver()

let concreteCommand1 = new ConcreteCommand1(receiver)

let concreteCommand2 = new ConcreteCommand1(receiver)

let invoker: Invoker = new Invoker()

invoker.storeAndExecute(concreteCommand1)

invoker.storeAndExecute(concreteCommand2)

console.log('翻译模式')

let context = new Context()

let terminalExpression = new TerminalExpression()

let list: TerminalExpression[] = []

for (let i = 0; i < 10; i ++) {
    list.push(terminalExpression)
}
list.forEach((item: TerminalExpression) => {
    item.interpret(context)
})

console.log('迭代器模式')

let numsArr = new Numbers([1, 2, 3, 4])

let conArr = numsArr.createIterator()

console.log(conArr.next())
console.log(conArr.next())
console.log(conArr.next())
console.log(conArr.next())

console.log('中介模式')

let concreteMediator = new ConcreteMediator()

let concreteColleagueA = new ConcreteColleagueA(concreteMediator)
let concreteColleagueB = new ConcreteColleagueB(concreteMediator)

concreteMediator.concreteColleagueA = concreteColleagueA
concreteMediator.concreteColleagueB = concreteColleagueB

concreteMediator.send('concreteColleagueA', concreteColleagueA)
concreteMediator.send('concreteColleagueB', concreteColleagueB)

console.log('观察者模式')

let observer = new Observer()

let concreteObserver1 = new ConcreteObserver('jack')
let concreteObserver2 = new ConcreteObserver('dom')

observer.register(concreteObserver1)
observer.register(concreteObserver2)
observer.dispatch()

console.log('声明模式')

let contexts = new Contexts(new ConcreteStateB())
contexts.request()
contexts.request()
contexts.request()
contexts.request()
contexts.request()
contexts.request()
