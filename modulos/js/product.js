// exportando a classe toda, juntamente com seus métodos e atributos
export default class Product{
    // função construtora
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    // métodos privados da classe
    total(){
        return this.price * this.quantity;
    }

    add(amount){
        this.quantity += amount;        
    }

    remove(amount){
        if(this.quantity >= amount){
            this.quantity -= amount;
        }
    }

    label(){
        return "Dados " + this.name + ", "+ this.price.toFixed(2);
    }
}