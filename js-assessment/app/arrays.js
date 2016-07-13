exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
    //a = [ 1, 2, 3, 4 ];
    // indexOf(a, 3)) // ANS: 2
  // indexOf(a, 3)) // ANS: -1

  indexOf : function(arr, item) {

    for(var i=0; i < arr.length; i++){

      if(arr[i] === item){
        return i;
      }
    }

      return -1;

  },

  //sum(a)).to.eql(10);

  sum : function(arr) {

    var total = 0;

    for(var i=0; i < arr.length; i++){
      total += arr[i];
    }

    return total;
  },

  // a.push(2); // Make sure the value appears more than one time
  // var result = arraysAnswers.remove(a, 2);
  // expect(result).to.have.length(3);
  // //expect(result.join(' ')).to.eql('1 3 4');
  remove : function(arr, item) {

    var arrUpdate = [];
    for(var i=0; i < arr.length; i++){
        //compare value ===item
        //only add other values to array

        if(!(arr[i]===item)){
          arrUpdate.push(arr[i]);
        }
    }
    return arrUpdate;
  },

  removeWithoutCopy : function(arr, item) {

    for(var i=arr.length -1; i >= 0; i--){

      if(arr[i]===item){
        arr.splice(i, 1);
      }

    }
    return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    return newArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var i=0; i < arr.length; i++){

      if(arr[i]===item){
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {

    //store an item and compare to every other item
    var seen = {};
    var dupes = [];

    for (var i = 0; i < arr.length; i++) {
      //if there is an item
      // Add value item + 1
      // Else add value 1
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;

      //if(seen[arr[i]]){
      //  seen[arr[i]] = seen[arr[i]] + 1;
      //} else {
      //  seen[arr[i]] = 1;
      //}
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(item);
      }
    }

    return dupes;
  },

  square : function(arr) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      ret.push(arr[i] * arr[i]);
    }

    return ret;
  },

  findAllOccurrences : function(arr, target) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        ret.push(i);
      }
    }

    return ret;
  }
};
