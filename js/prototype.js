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