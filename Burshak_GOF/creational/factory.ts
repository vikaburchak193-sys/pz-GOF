interface Transport {
    deliver(): string;
}

class Truck implements Transport {
    deliver() { return "Доставка вантажівкою по дорозі"; }
}

class Ship implements Transport {
    deliver() { return "Доставка судном морем"; }
}

abstract class Logistics {
    abstract createTransport(): Transport;

    planDelivery(): string {
        const transport = this.createTransport();
        return transport.deliver();
    }
}

class RoadLogistics extends Logistics {
    createTransport() { return new Truck(); }
}

class SeaLogistics extends Logistics {
    createTransport() { return new Ship(); }
}

// --- Тест Factory ---
const factory = new MyFactory(); // Заміни MyFactory на назву своєї фабрики
const productA = factory.createProduct('A');
const productB = factory.createProduct('B');

console.log("--- Тест Factory ---");
console.log(productA.operation());
console.log(productB.operation());