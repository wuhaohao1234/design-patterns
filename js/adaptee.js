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