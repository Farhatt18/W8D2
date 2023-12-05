// Your code here
Array.prototype.myEach = function (callback){
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}



// Array.prototype.myMap = function (callback){
//   let arr = []
//     this.myEach(function(el) {
//       arr.push(callback(el));
// });
//   return arr;
// }
// const num = [1,2,3]
// console.log(num.myMap(function(el){
//   return (el*3)
// }

// console.log(numbers)



Array.prototype.myMap = function (callback) {
  let result = []
  this.myEach(function(ele) {
      result.push(callback(ele));
  });


  return result;
}


const numbers = [1, 2, 3, 4, 5];

console.log(numbers.myMap(function(num) {
return num * num;
}));


