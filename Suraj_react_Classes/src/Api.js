function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Suraj",
                age: 29,
                state: "Gujrat"
            });
            reject("data could not be fetched");
        }, 3000)

    })
}
// api()
//     .then(data => console.log(data, "Type", typeof (data)))
//     .catch(err => console.log(err))
//     .finally(() => console.log("finally"))
const newApi = async () => {
    const data = await api()
    console.log("Api call done");
    return data;
}
newApi().then(data => console.log(data))

// callback 
// function myFunc(callback) {
//     callback()
// }
// function warning() {
//     console.warn("Warning")
// }
// myFunc(warning)





const myArr = ["suraj", "rahut", "manish"]
function showName(name) {
    console.log(name)
    return name
}

myArr.forEach(showName)



// const age=3
// const myname = "suraj"

// function showName(call) {
//     call(age)
// }
// function call(n){
//     const newAge= n * 5 - 3 
//     console.log(newAge)
// }
// showName(call)
// showName(call)