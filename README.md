# design-patterns
设计模式

## 设计模式的六大原则

### 总原则：开闭原则（Open Close Principle）

开闭原则就是说对**扩展开放，对修改关闭**。在程序需要进行拓展的时候，不能去修改原有的代码，而是要扩展原有代码，实现一个热插拔的效果。所以一句话概括就是：为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用接口和抽象类等，后面的具体设计中我们会提到这点。

### 一、单一职责原则

不要存在多于一个导致类变更的原因，也就是说每个类应该实现单一的职责，如若不然，就应该把类拆分。

### 二、里氏替换原则（Liskov Substitution Principle）

里氏代换原则(Liskov Substitution Principle LSP)面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。 LSP是继承复用的基石，只有当衍生类可以替换掉基类，软件单位的功能不受到影响时，基类才能真正被复用，而衍生类也能够在基类的基础上增加新的行为。里氏代换原则是对“开-闭”原则的补充。实现“开-闭”原则的关键步骤就是抽象化。而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。—— From Baidu 百科

历史替换原则中，子类对父类的方法尽量不要重写和重载。因为父类代表了定义好的结构，通过这个规范的接口与外界交互，子类不应该随便破坏它。

### 三、依赖倒转原则（Dependence Inversion Principle）

这个是开闭原则的基础，具体内容：面向接口编程，依赖于抽象而不依赖于具体。写代码时用到具体类时，不与具体类交互，而与具体类的上层接口交互。

### 四、接口隔离原则（Interface Segregation Principle）

这个原则的意思是：每个接口中不存在子类用不到却必须实现的方法，如果不然，就要将接口拆分。使用多个隔离的接口，比使用单个接口（多个接口方法集合到一个的接口）要好。

### 五、迪米特法则（最少知识原则）（Demeter Principle）

就是说：一个类对自己依赖的类知道的越少越好。也就是说无论被依赖的类多么复杂，都应该将逻辑封装在方法的内部，通过public方法提供给外部。这样当被依赖的类变化时，才能最小的影响该类。

最少知道原则的另一个表达方式是：只与直接的朋友通信。类之间只要有耦合关系，就叫朋友关系。耦合分为依赖、关联、聚合、组合等。我们称出现为成员变量、方法参数、方法返回值中的类为直接朋友。局部变量、临时变量则不是直接的朋友。我们要求陌生的类不要作为局部变量出现在类中。

### 六、合成复用原则（Composite Reuse Principle）

原则是尽量首先使用合成/聚合的方式，而不是使用继承。

## 23种设计模式

### A、创建型(Creational)

1. 单例模式(Singleton Pattern)

    A class of which only a single instance can exist.

    一个类里面只能存在一个实例的类

    这里使用了class里面的static定义一个静态方法，外部不需要通过new 创造一个对象就可以使用这个方法

    ```
    export default class Singleton {
        public static singleton: Singleton
        public static getInstance(): Singleton {
            if (!Singleton.singleton) {
                Singleton.singleton = new Singleton()
            }
            return Singleton.singleton
        }
    }
    ```

    example

    ```
    let singleton1 = Singleton.getInstance()

    let singleton2 = Singleton.getInstance()

    console.log(singleton1 === singleton2) // true
    ```

    js代码

    ```
    function Singleton() {

    }
    Singleton.getInstance = function() {
        if(!Singleton.singleton) {
            Singleton.singleton = new Singleton()
        }
        return Singleton.singleton
    }

    let singleton1 = Singleton.getInstance()

    let singleton2 = Singleton.getInstance()

    console.log(singleton1 === singleton2)
    ```

2. Abstract Factory Pattern(抽象工厂模式)

    Creates an instance of several families of classes..

    创建几个类的实例

    ```
    class Product1 {
        public method() {
            console.log(1)
        }
    }
    class Product2 {
        public method() {
            console.log(2)
        }
    }

    export class ConcreteFactory {
        public createProdect1() {
            return new Product1()
        }
        public createProdect2() {
            return new Product2()
        }
    }

    export class Tester {
        public abstract1: Product1
        public abstract2: Product2
        constructor(factory: ConcreteFactory) {
            this.abstract1 = factory.createProdect1()
            this.abstract2 = factory.createProdect2()
        }
        public test() {
            this.abstract1.method()
            this.abstract2.method()
        }
    }
    ```

    example

    ```
    let concreteFactory = new ConcreteFactory()

    let tester = new Tester(concreteFactory)

    tester.test()
    ```
3. 工厂模式(Factory Method)

    Facilitates the creation of other objects.

    创建其它对象

    
    ```
    export interface IClass {
        method(): void 
    }
    class Product1 implements IClass {
        public method() {
            console.log('Product1')
        }
    }
    class Product2 implements IClass {
        public method() {
            console.log('Product2')
        }
    }
    const createProduct = (type: number): IClass => {
        if (type === 1) {
            return new Product1()
        } else {
            return new Product2()
        }
    }

    export default createProduct
    ```

    example

    ```
    let product1 = createProduct(1)
    let product2 = createProduct(2)

    product1.method()
    product2.method()
    ```
4. 建造者模式(builder Pattern)

    Solves the problem of telescoping constructor.

    解决了伸缩式构造器的问题。

    ```
    export class UserBuider {
        private name: string
        private age: number | undefined
        constructor(name: string) {
            this.name = name
        }
        get Name() {
            return this.name
        }
        public setAge(val: number): UserBuider {
            this.age = val
            return this
        }
        get Age() {
            return this.age
        }
        public buider() {
            return new User(this)
        }
    }

    export class User {
        private name: string
        private age: number | undefined
        constructor(buider: UserBuider) {
            this.name =  buider.Name
            this.age = buider.Age
        }
        get Name() {
            return this.name
        }
        get Age() {
            return this.age
        }
    }export class UserBuider {
        private name: string
        private age: number | undefined
        constructor(name: string) {
            this.name = name
        }
        get Name() {
            return this.name
        }
        public setAge(val: number): UserBuider {
            this.age = val
            return this
        }
        get Age() {
            return this.age
        }
        public buider() {
            return new User(this)
        }
    }

    export class User {
        private name: string
        private age: number | undefined
        constructor(buider: UserBuider) {
            this.name =  buider.Name
            this.age = buider.Age
        }
        get Name() {
            return this.name
        }
        get Age() {
            return this.age
        }
    }
    ```

    example

    ```
    let userBuider = new UserBuider('user')

    console.log(userBuider.setAge(12).Name)

    let user = new User(userBuider)

    console.log(user.Name)

    console.log(user.Age)
    ```
5. 原型(prototype)

    ```
    interface IPrototype {
        clone(): IPrototype
        toString(): string
    }
    export class Concrete implements IPrototype {
        public clone() {
            return new Concrete()
        }
        public toString() {
            return 'Concrete'
        }
    }

    export class Builder {
        private prototypeMap: {[s: string]: IPrototype} = {}
        constructor() {
            this.prototypeMap['c1'] = new Concrete()
        }
        public createOne(s: string) {
            return this.prototypeMap[s].clone()
        }
    }
    ```
    example
    ```
    let builder = new Builder()

    let c1 = builder.createOne('c1')
    console.log(c1.toString())
    ```

    js

    ```
    function Concrete() {
        this.toString = function() {
            return 'Concrete'
        }
        this.clone = function() {
            return new Concrete()
        }
    }

    function Buider() {

    }
    Buider.prototype = new Concrete()
    Buider.prototype.constructor = Buider

    let buider = new Buider().clone()

    console.log(buider.toString())
    ```

### B、结构型(Structural)

1. Adapter(适配器模式)

    Convert the interface of class into another interface clients expect. Adapter lets class work together that couldn't otherwise because of incompatible interfaces.

    将类的接口转换为客户期望的另一个接口。 适配器允许类一起工作，否则由于不兼容的接口。

    ```
    class Adaptee {
        public method() {
            console.log('这是Adaptee的方法')
        }
    }

    export interface ITarget {
        call(): void
    }

    export default class Target implements ITarget {
        public call() {
            let varAdaptee: Adaptee = new Adaptee()
            varAdaptee.method()
        }
    }
    ```
    example

    ```
    new Target().call()
    ```
    js

    ```
    function Adaptee() {
        this.method = function() {
            console.log(this)
            console.log('Adaptee')
        }
    }
    function Target () {
        this.call = function() {
            var adaptee = new Adaptee()
            adaptee.method.call(this)
        }
    }

    let target = new Target()

    target.call()
    ```
2. Bridge Pattern(桥模式)

    decouple an abstraction from its implementation so that the two can vary independently.

    将抽象与其实现分离，以便两者可以独立变化。

    ```
    export interface Implementor {
        callee(s: any): void;
    }
    export class ConcreteImplementorA implements Implementor {
        public callee(s: any) {
            console.log('concreteImplementorA')
            console.log(s)
        }
    }
    class Abstraction {
        public implementor: Implementor;
        constructor(imp: Implementor) {
            this.implementor = imp;
        }

        public callIt(s: String): void {
            throw new Error("This method is abstract!");
        }
    }

    export class RefinedAbstractionA extends Abstraction {
        constructor(imp: Implementor) {
            super(imp)
        }
        public callIt() {
            this.implementor.callee('s')
        }
    }
    ```

    example

    ```
    let concreteImplementorA = new ConcreteImplementorA()
    let refinedAbstractionA = new RefinedAbstractionA(concreteImplementorA)
    refinedAbstractionA.callIt()
    ```

    js

    ```
    function ConcreteImplementorA() {
        this.callee = function () {
            console.log('ConcreteImplementorA')
        }
    }

    function Abstraction(obj) {
        this.implementor = new obj()
        this.callIt = function() {
            console.log('Abstraction')
        }
    }

    function RefinedAbstractionA() {
        Abstraction.call(this,ConcreteImplementorA)
        this.callIt = function() {
            this.implementor.callee()
        }
    }

    let refinedAbstractionA = new RefinedAbstractionA()

    refinedAbstractionA.callIt()
    ```

3. Composite Pattern(合成模式)

    lets clients treat individual objects and compositions uniformly.

    让客户统一处理单个对象和组合。

    ```
    export class Leaf {
        private s: string
        constructor(s: string) {
            this.s = s
        }
        public operation() {
            console.log(this.s)
        }
    }

    export class Composite {
        private list: Leaf[]
        private s: string
        constructor(s: string) {
            this.s = s
            this.list = []
        }
        public add(c: Leaf) {
            this.list.push(c)
            return this
        }
        public remove(i: number) {
            if (this.list.length <= i) {
                throw new Error("index out of bound!");
            }
            this.list.splice(i, 1);
        }
        public operation() {
            this.list.forEach((item) => {
                item.operation()
            })
        }
    }
    ```
    example
    ```
    let leaf1 = new Leaf('1')
    let leaf2 = new Leaf('2')
    let leaf3 = new Leaf('3')

    let composite = new Composite('合成')

    composite.add(leaf1).add(leaf2).add(leaf3).operation()
    ```

4. 装饰者模式

    Allows behavior to be added to an individual object dynamically.

    允许将行为动态添加到单个对象。

    ```
    export class ConcreteComponent {
        private s: string
        constructor(s: string) {
            this.s = s
        }
        public operation() {
            console.log(this.s)
        }
    }
    class Decorator {
        private component: ConcreteComponent
        private id: number
        constructor(id: number, component: ConcreteComponent) {
            this.id = id
            this.component = component
        }
        public getId() {
            return this.id
        }
        public operation() {
            this.component.operation()
            console.log(this.id)
        }
    }

    export class ConcreteDecorator extends Decorator {
        constructor(id: number, component: ConcreteComponent) {
            super(id, component)
        }
        public operations() {
            console.log(this.getId())
            this.operation()
        }
    }
    ```

    example

    ```
    new ConcreteDecorator(1, new ConcreteComponent('s')).operations()
    ```

5. Facade Pattern(外观模式)

    Substitute the interfaces of a set of classes by the interface of one class. Facade hides implementation classes behind one interface.

    为子系统中的一组接口提供一个一致的界面，定义一个高层接口，这个接口使得这一子系统更加容易使用。这句话是百度百科的解释，有点难懂，但是没事，看下面的例子，我们在启动停止所有子系统的时候，为它们设计一个外观类，这样就可以实现统一的接口，这样即使有新增的子系统subSystem4,也可以在不修改客户端代码的情况下轻松完成。

    ```
    class Part1 {
        public method1(): void {
            console.log("`method1` of Part1");
        }
    }
    class Part2 {
        public method2(): void {
            console.log("`method2` of Part2");
        }
    }
    class Part3 {
        public method3(): void {
            console.log("`method3` of Part3");
        }
    }
    export default class Facade {
        private part1: Part1 = new Part1();
        private part2: Part2 = new Part2();
        private part3: Part3 = new Part3();

        public operation1(): Facade {
            console.log("`operation1` is called ===");
            this.part1.method1();
            this.part2.method2();
            console.log("==========================");
            return this
        }

        public operation2(): void {
            console.log("`operation2` is called ===");
            this.part1.method1();
            this.part3.method3();
            console.log("==========================");
        }
    }
    ```
    example
    ```
    new Facade().operation1().operation2()
    ```

6. Flyweight(享元模式)

    Facilitates the reuse of many fine grained objects, making the utilization of large numbers of objects more efficient.

    使用共享对象的方法，用来尽可能减少内存使用量以及分享资讯。通常使用工厂类辅助

7. Proxy (代理模式)

    Provide a surrogate or placeholder for another object to control access to it.

    为另一个对象提供代理或占位符以控制对它的访问。

### C、行为型(Behavioral)

1. Chain of Responsibility(责任链模式)

    Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

    通过为多个对象提供处理请求的机会，避免将请求的发送者耦合到其接收者。 链接接收对象并沿链传递请求，直到对象处理它。

    责任链接模式又称职责链模式，是一种对象的行为模式；它是一种链式结构，每个节点都有可能两种操作，要么处理该请求停止该请求操作，要么把请求转发到下一个节点，让下一个节点来处理请求；该模式定义了一些可能的处理请求的节点对象，请求的起点跟顺序都可能不一样，处理的节点根据请求的不一样而不同；请求者不必知道数据处理完成是由谁来操作的，内部是一个黑箱的操作过程，这是它的一个核心内容

    ```    
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
    ```

    example

    ```
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
    ```

2. command(命令模式)

    Creates objects which encapsulate actions and parameters.

    创建封装操作和参数的对象。

    ```
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

    ```

    example

    ```
    let receiver: Receiver = new Receiver()

    let concreteCommand1 = new ConcreteCommand1(receiver)

    let concreteCommand2 = new ConcreteCommand1(receiver)

    let invoker: Invoker = new Invoker()

    invoker.storeAndExecute(concreteCommand1)

    invoker.storeAndExecute(concreteCommand2)
    ```

3. Interpreter Pattern

    Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

    给定一种语言，定义其语法的表示以及使用该表示来解释该语言中的句子的解释器。

4. Iterator Pattern(迭代器模式)

    Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

    提供一种顺序访问聚合对象元素的方法，而不会暴露其基础表示。

    ```
    class ConcreteIterator {
        private collection: any[] = [];
        private position: number = 0;

        constructor(collection: any[]) {
            this.collection = collection;
        }

        public next(): any {
            // Error handling is left out
            let result = this.collection[this.position];
            this.position += 1;
            return result;
        }

        public hasNext(): boolean {
            return this.position < this.collection.length;
        }
    }

    export default class Numbers {
        private collection: number[] = []
        constructor(collection: number[]) {
            this.collection = collection
        }
        public createIterator() {
            return new ConcreteIterator(this.collection)
        }
    }
    ```

    example

    ```
    let numsArr = new Numbers([1, 2, 3, 4])

    let conArr = numsArr.createIterator()

    console.log(conArr.next())
    console.log(conArr.next())
    console.log(conArr.next())
    console.log(conArr.next())
    ```

5. Mediator Pattern(中介模式)

    Promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.

    通过使对象明确地相互引用来促进松散耦合，并且它允许您独立地改变它们的交互。


    中介者模式的作用是解除对象与对象之间的耦合关系，增加一个中介对象后，所有的相关对象都通过中介者对象来通信，而不是相互引用，所以当一个对象发送改变时，只需要通知中介者对象即可。


    ```
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
    ```

    example

    ```
    let concreteMediator = new ConcreteMediator()

    let concreteColleagueA = new ConcreteColleagueA(concreteMediator)
    let concreteColleagueB = new ConcreteColleagueB(concreteMediator)

    concreteMediator.concreteColleagueA = concreteColleagueA
    concreteMediator.concreteColleagueB = concreteColleagueB

    concreteMediator.send('concreteColleagueA', concreteColleagueA)
    concreteMediator.send('concreteColleagueB', concreteColleagueB)
    ```

6. Observer (观察者模式)

    Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

    定义对象之间的一对多依赖关系，以便当一个对象更改状态时，将自动通知和更新其所有依赖项。

7. State Pattern(声明模式)

    A cleaner way for an object to change its behavior at runtime without resorting to large monolithic conditional statements.

    对象在运行时更改其行为而不诉诸大型单片条件语句的更简洁方法。
    a 请求 b,b 请求 a
    ```
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
    ```

    example

    ```
    let contexts = new Contexts(new ConcreteStateB())
    contexts.request()
    contexts.request()
    contexts.request()
    contexts.request()
    contexts.request()
    contexts.request()
    ```

8. Strategy Pattern(策略模式)

    Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

    定义一系列算法，封装每个算法，并使它们可互换。 策略允许算法独立于使用它的客户端。

    与代理模式类似(不说了)

9. templateMethod(模板模式)

    Define the basic steps of an algorithm and allow the implementation of the individual steps to be changed.

    定义算法的基本步骤，并允许更改各个步骤的实现。

    ```
    export class AbstractClass {
        public method1(): void {
            throw new Error("Abstract Method");
        }

        public method2(): void {
            throw new Error("Abstract Method");
        }

        public method3(): void {
            throw new Error("Abstract Method");
        }

        public templateMethod(): void {
            console.log("templateMethod is being called");
            this.method1();
            this.method2();
            this.method3();
        }
    }

    export class ConcreteClass1 extends AbstractClass {
        public method1(): void {
            console.log("method1 of ConcreteClass1");
        }

        public method2(): void {
            console.log("method2 of ConcreteClass1");
        }

        public method3(): void {
            console.log("method3 of ConcreteClass1");
        }
    }

    export class ConcreteClass2 extends AbstractClass {
        public method1(): void {
            console.log("method1 of ConcreteClass2");
        }

        public method2(): void {
            console.log("method2 of ConcreteClass2");
        }

        public method3(): void {
            console.log("method3 of ConcreteClass2");
        }
    }
    ```

    通过继承，直接改变原对象里面的方法


10. Publish subscription(发布订阅模式)

    https://github.com/wuhaohao1234/es6/blob/master/vue%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A/myVue.js  

