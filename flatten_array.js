// Extend Array with flatten method
Array.prototype.flatten = function() {
    var ret = [];
    for(var i = 0; i < this.length; i++) {
        if(Array.isArray(this[i])) {
            ret = ret.concat(this[i].flatten()); //recursive method call for each array
        } else {
            ret.push(this[i]); // add element to flat array
        }
    }
    return ret;
};

// Usage example: [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]].flatten() // [0, 1, 2, 3, 4, 5]
