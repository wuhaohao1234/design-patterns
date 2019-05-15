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
}