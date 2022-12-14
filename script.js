const student = "Матвеев Кирилл Дмитриевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

class Person {

    constructor(name,age){
        if(age < 0) throw "Возраст не может быть отрицательным";
        this.name = name;
        this.age = age;
    }

    throwRandomError(chance) { 
        let Random_age = Math.random(1).toFixed(1);
        if (chance >1 && chance <0){
            throw new Error(`Значение шанса должно быть в промежутке от $(0) до $(1)`);
        }
        if(Random_age <= chance){
            throw new Error(`Что то пошло не по плану`);
        }
    }


    print(){console.log(`Name: ${this.name} Age: ${this.age}`);}
}

try{
    const tom = new Person("Tom", 123);
    tom.print();
    tom.throwRandomError(0.2);
}
catch(error){
    console.log("Произошла ошибка");
    console.log(error);
}
