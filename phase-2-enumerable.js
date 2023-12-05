// Your code here
Array.prototype.myEach = function (callback){
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function (callback){
    for(let i = 0; i < this.length; i++) {
        this[i] = callback(this[i]);
    }
    return this;
}