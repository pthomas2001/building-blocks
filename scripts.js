let count = 10
for (let i = 1; i<=count; i++) {
    console.log(i)
}

let count2 = 10
for (let i2 = 0; i2<=count2; i2 = i2+2) {
    console.log(i2)
}

let first = (N) => {
    for (let i3 = 1; i3<=N; i3++) {
        console.log(i3)
    }
}
first(20)

let greet = (name) => {
    console.log(`Hello ${name}!`)
}
greet("Tamás")

values = [2, 3, 8, 9, 5]
values.forEach((number) => {
        console.log(number)
})
