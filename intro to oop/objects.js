let person = {
    name: "John",
    surname: "Doe",
    age: "50"
};


console.log(person.age)

//person["height"] = 5.9
person.height = 5.5

//update 

person["weight"] = 65


//remove the property 

delete person.age

console.log(person.age)

//for/in loop 

for(let x in person) {
    // console.log(x)
    // console.log(person[x])// the values of properties
    console.log(`${x} ${person[x]}`)
}


//methods 

let employee = {
    empname: "scott",
    job: "engineer",
    basicsal: 50000,
    //method is js function
    bonus: function calbonuz() {
        return ((this.basicsal * 10) /100)
    }
};


console.log(employee["empname"])

//access the method 

console.log(employee.bonus())