let array=[89,34,43,45,56,56,false,'hello']
console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[7])
array[8]=10
console.log(array)

console.log(array.length)

for(let i =0;i<array.length;i++){
  console.log(array[i])
}



// array methods
//>>>>>>>>> beString

let numm = [23, 3,  34, 4, 3]
console.log(num)
 console.log(typeof num)
 let a = num.toString()
console.log(a)
console.log(typeof a)
b = num.join('_')
console.log(b)              //23-34-34-434-3

num.pop()
console.log(num)
num.push(567)
let c=num.shift()
console.log(c ,num)
let d= num.unshift(12)
console.log(d, num)

//delete method
let nummm = [1, 2, 3, 4, 5, 6]

 delete num[0]
console.log(num)
let num2 = [34, 45, 45, 45]
let newNum=num.concat(num2)
console.log(newNum)

// //sort
let compare=(a,b)=>{
  return a-b
}
let nummmm = [1, 2, 43, 4, 54, 6]
let s=num.sort(compare)
console.log(s)


//splice and

let num = [1, 2, 43, 4, 54, 6]
num.splice(1,0,3434,3444,4440)
console.log(num)
