interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number) { console.log(`Сплата ${amount} через Card`); }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number) { console.log(`Сплата ${amount} через PayPal`); }
}

class ShoppingCart {
    private strategy: PaymentStrategy;

    setPaymentMethod(s: PaymentStrategy) { this.strategy = s; }
    checkout(amount: number) { this.strategy.pay(amount); }
}
// --- Тест Strategy ---
const context = new Context(new ConcreteStrategyA());
console.log("--- Тест Strategy ---");
context.execute();

context.setStrategy(new ConcreteStrategyB());
context.execute();