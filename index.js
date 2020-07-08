const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {

      for (let i =0 ; i<collection.length ;i++){
        callback(collection[i]);
      }
      return collection
    },

    map: function( collection,callback) {

      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
         newArray.push(callback(collection[i]))
      }

      return newArray;

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
