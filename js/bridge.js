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