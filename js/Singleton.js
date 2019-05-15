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