function myEach(collection, cb){
    let valueOfArray;

    if(Array.isArray(collection)){
        valueOfArray = collection
    }
    else if (typeof collection === "object" && collection !== null){
        valueOfArray= Object.values(collection)
    }else{
    return collection
    }
    if(valueOfArray){
        for(let i = 0; i < valueOfArray.length; i++){
            cb(valueOfArray[i])
            }
    }
    return collection
}
console.log(myEach([1,2,3], alert))
function cb(elements){
    console.log(elements)
}


function myMap(collection, cb){
    let valueOfArray;
    if(Array.isArray(collection)){
        valueOfArray = collection
    }
    else if (typeof collection === "object" && collection !== null){
        valueOfArray= Object.values(collection)
    }else{
        return collection
    }
    let newArr = []
    if(valueOfArray){
        for(let i = 0; i < valueOfArray.length; i++){
            newArr.push(cb(valueOfArray[i]))
        }
    }
    
    return newArr
}    

function myReduce(collection, cb, acc){
    let valueOfArray;
    if(Array.isArray(collection)){
        valueOfArray = collection
    }
    else if (typeof collection === "object" && collection !== null){
        valueOfArray= Object.values(collection)
    }else{
        return collection
    }
    let sumArray = acc;
    if (sumArray === undefined && valueOfArray.length > 0) {
        sumArray = valueOfArray[0];
        for (let i = 1; i < valueOfArray.length; i++) {
          sumArray = cb(sumArray, valueOfArray[i]);
        }
      } else{
            for(const element of valueOfArray){
            sumArray = cb(sumArray, element)
            }
      }    
    return sumArray
}

function myFind(collection, predicate){
    let valueOfArray;

    if(Array.isArray(collection)){
        valueOfArray = collection
    }
    else if (typeof collection === "object" && collection !== null){
        valueOfArray= Object.values(collection)
    }else{
    return collection
    }
    if(valueOfArray){
        for(let i = 0; i < valueOfArray.length; i++){
            if(predicate(valueOfArray[i])){
                return valueOfArray[i]
            }
        }
 
    }
    return undefined
}

function myFilter(collection, predicate){
    let valueOfArray;

    if(Array.isArray(collection)){
        valueOfArray = collection
    }
    else if (typeof collection === "object" && collection !== null){
        valueOfArray= Object.values(collection)
    }else{
    return collection
    }
    let filteredArray =[];
    if(valueOfArray){
        for(let i = 0; i < valueOfArray.length; i++){
            if(predicate(valueOfArray[i])){
                filteredArray.push(valueOfArray[i])
            }
        }
        return filteredArray
    }
}

function mySize(collection){
    let valueOfArray;

    if(Array.isArray(collection)){
        valueOfArray = collection
    }
    else if (typeof collection === "object" && collection !== null){
        valueOfArray= Object.values(collection)
    }else{
    return collection
    }
    return valueOfArray.length
}

function myFirst(array, n){
    if(n === undefined){
        return array[0];
    }else {
        return array.slice(0, n)
    }
}

function myLast(array, n){
    if (n === undefined){
        return array[array.length - 1]
    }else {
        return array.slice(Math.max(0, array.length - n))
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}