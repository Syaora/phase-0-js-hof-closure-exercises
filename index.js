function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    callback(arr[i], i, arr)
  }
}

function map(arr, callback) {
  const newArr = [...arr]

  for (let i = 0; i < arr.length; i++){
    newArr[i] = callback(arr[i])
  }

  return newArr
}

function filter(arr, callback) {
  const newArr = []

  for (let i = 0; i < arr.length; i++){
    if (callback(arr[i])){
      newArr.push(arr[i])
    }
  }

  return newArr
}

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    if (!callback(arr[i])){
      return false
    }
  }
  return true
}

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    if (callback(arr[i])){
      return true
    }
  }
  return false
}

function majority(arr, callback) {
  let numTrue = 0

  for (let i = 0; i < arr.length; i++){
    if (callback(arr[i])){
      numTrue += 1
    }
  }

  if (numTrue > arr.length / 2){
    return true
  }
  return false
}

function once(callback) {
  let ran = false
  let memo
  return function() {
    if (ran) return memo
    ran = true
    memo = callback.apply(this, arguments)
    callback = null
    return memo
  }
}

function groupBy(arr, callback) {
  const newObj = {}

  for (let i = 0; i < arr.length; i++){
    let value = callback(arr[i])
    
    if (newObj[value]){
      newObj[value].push(arr[i])
    }
    else newObj[value] = [arr[i]]
  }
  return newObj
}

function arrayToObject(arr, callback) {
  const newObj = {}

  for (let i = 0; i < arr.length; i++){
    newObj[arr[i]] = callback(arr[i])
  }
  
  return newObj
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
