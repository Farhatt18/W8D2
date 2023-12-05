let array = [1,2,2,3,3,3];
Array.prototype.uniq = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++){
    if (!arr.includes(this[i]))
    {
      arr.push(this[i]);
    }
  }
  return arr;
};

// console.log(array.uniq());


Array.prototype.twoSum = function(){
  let arr =[];
  for (let i = 0; i <this.length; i++){
    for (let j = 0; j <this.length; j++){
      if (j > i){
        if (this[i]+this[j] === 0){
          arr.push([i,j]);
        }
      }  
    }
  }
  return arr;
};

// console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function(){
  let arr = [];
  let length = this.length

  for (let i = 0; i < this.length; i++){
    arr.push([]);
  }

  for (let i = 0; i < this.length; i++){
    for (let j = 0; j < length; j++){
      arr[j].push(this[i][j]);
    }
  }
  return arr;
};
console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())

