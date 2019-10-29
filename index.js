const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (collection instanceof Array) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        for (const key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []

      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++)
        newCollection.push(callback(collection[i]))

      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let memo
      if (acc) {
        memo = acc
        for (let i = 0; i < collection.length; i++) {
          memo = callback(memo, collection[i], collection)
        }
      } else {
        memo = collection[0]
        const sliced = collection.slice(1)
        for (let i = 0; i < sliced.length; i++) {
          memo = callback(memo, sliced[i], sliced)
        }
      }
      return memo
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
