import Singleton from './API/singletonPattern'
import { ConcreteFactory, Tester } from './API/abstractFactory'
import createProduct from './API/factoryMethod'
import { UserBuider, User } from './API/builder'
import { Builder } from './API/prototype'
import Target from './API/adaptee'
import { ConcreteImplementorA, RefinedAbstractionA } from './API/bridge'
import { Composite, Leaf } from './API/composite'
import {ConcreteComponent, ConcreteDecorator} from './API/decorator'
import Facade from './API/facade'
import FlyweightFactory from './API/flyweight'
import Proxy from './API/proxy'
import ConcreteHandler1 from './API/chainOfResponsibility'

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
