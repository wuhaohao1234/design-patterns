export default class Singleton {
    public static singleton: Singleton
    public static getInstance(): Singleton {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton()
        }
        return Singleton.singleton
    }
}