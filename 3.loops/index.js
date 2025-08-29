console.log("loops")
for (let i = 0; i < 10; i++) {
    console.log(i)

}
// basic for loop
let o = {
    name: "sumit", age: 18,marks: 100

}

for (const key in o) {
    const element = o[key];
    console.log(element)
    console.log(key)
}

for (const a of "sumit") {
    console.log(a)
}
let a=1
while (a<10) {
    console.log(a)
    a++
}

// do {
//     console.log(a)
//     a++
// } while (a<10);
