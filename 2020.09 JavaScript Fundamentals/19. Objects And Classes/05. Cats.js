function cats(array) {
    let cats = []; // array with objects

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    for (let cat of array) {
        let [name, age] = cat.split(' ');
        cats.push(new Cat(name, age));
    }

    for (let action of cats) {
        action.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
// Mellow, age 2 says Meow
// Tom, age 5 says Meow