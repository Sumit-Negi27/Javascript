let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(arr);
console.log(arr.length)
arr[5]=999;
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}
console.log(arr.slice(1,3))
console.log(arr.splice(0,1,1000,2000)) 
// ismai first wala element indexing bataega dusara of element insert krne wala bataega and then uske baad element insert kro 
console.log(arr)
