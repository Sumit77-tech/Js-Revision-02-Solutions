function CustomArray(initialArray = []) {
    this.data = initialArray;
    this.map = function(callback) {
        this.data = this.data.map(callback);
        return this;
    };
    this.filter = function(callback) {
        this.data = this.data.filter(callback);
        return this;
    };
    this.reduce = function(callback, initialValue) {
        return this.data.reduce(callback, initialValue);
    };
    this.forEach = function(callback) {
        this.data.forEach(callback);
        return this;
    };
    this.sort = function(compareFunction) {
        this.data.sort(compareFunction);
        return this;
    };
    this.getData = function() {
        return this.data;
    };
}
let myArray = new CustomArray([5, 2, 9, 1, 5, 6]);
myArray.map((x) => x * 2);
console.log("After map:", myArray.getData());
myArray.filter((x) => x > 10);
console.log("After filter:", myArray.getData());
let sum = myArray.reduce((acc, x) => acc + x, 0);
console.log("Sum of elements:", sum);
console.log("Using forEach:");
myArray.forEach((x) => 
console.log(x));
myArray.sort((a,b) => b - a);
console.log("After sort:", myArray.getData());
myArray.data = [5, 2, 9, 1, 5, 6];
myArray
.map((x) => x + 1)
.filter((x) => x > 5)
.sort((a,b) => a - b);
console.log('After chaining:', myArray.getData());
