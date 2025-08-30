console.log("this is mapping one")

arr=[1,2,3,4,5,6,7]
// newarr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr)

let arr1= arr.map(e=>{
    return e**2;
})
console.log(arr1)