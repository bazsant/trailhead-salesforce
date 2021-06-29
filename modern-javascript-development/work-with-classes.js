class Parent {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Child extends Parent {
    constructor(name) {
        super(name);
    }

    getMessage() {
        return `Hello ${super.getName()}`;
    }
}

let someone = new Child('world!!!');
console.log(someone.getMessage());