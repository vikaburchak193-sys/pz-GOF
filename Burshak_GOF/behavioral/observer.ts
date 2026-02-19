interface Subscriber {
    update(message: string): void;
}

class NewsAgency {
    private observers: Subscriber[] = [];

    subscribe(o: Subscriber) { this.observers.push(o); }

    notify(news: string) {
        this.observers.forEach(o => o.update(news));
    }
}

class NewsReader implements Subscriber {
    constructor(private name: string) {}
    update(message: string) {
        console.log(`${this.name} отримав новину: ${message}`);
    }
}
// --- Тест Observer ---
const subject = new Subject();
const obs1 = new ConcreteObserver("Підписник 1");
const obs2 = new ConcreteObserver("Підписник 2");

subject.addObserver(obs1);
subject.addObserver(obs2);

console.log("--- Тест Observer ---");
subject.notify("Нове повідомлення!");