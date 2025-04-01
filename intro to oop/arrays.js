let fruits = ["bananas", "apples", "mangoes", "straw", "baby"]
//to string and join

console.log(fruits.toString())

console.log(fruits.join(" "))

//pop remove the last
fruits = ["bananas", "apples", "mangoes", "straw", "baby"]

fruits.pop()



//push - new el at the end

fruits.push("anna")


//shift - removes the first

fruits.shift()


//unshift adds the first

fruits = ["orange", "apples", "mangoes", "straw", "baby"]

fruits.unshift()

//del el

// for (let i = 0; i < fruits.length; i++)
// {
//     delete fruits[i]

//     //but the place is still here
// }

// console.log(fruits)

//concat() merge two arr

let arr1 = [10, 20]

let arr2 = ["A", "B", "C"]

console.log(arr1.concat(arr2))

//slice() create a new arr from an old one

let arr5 = [1, 2, 12, 4, 5]

console.log(fruits.slice(1))

//sort()

console.log(arr5.sort())

console.log(fruits.reverse())


let numbers = [5, 1, 8, 3, 2];
numbers.sort(function(a, b) {
  return a - b; // Ascending order
});
console.log(numbers); // Output: [1, 2, 3, 5, 8]
