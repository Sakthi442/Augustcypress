// let a="sakthi"
// let b=5
// console.log(`hello ${a} and the number is ${b}`);

// set time out(certine time come out for result)

// setTimeout(()=>{ 
//     console.log("hello iam javascript")
// },3000)

// call back(passing the function into a another functions argument is called callback function)


// function greet(callback)
// {
//     console.log(`sakthi`);
//     callback();
// }
// function greets()
// {
//     console.log("how are you");

// }
// greet(greets)

// callback function using multilple functions is called call back hell
// function task1(callback)
// {
//     setTimeout(()=>{
//         console.log("iam finction1");
//         callback();

//     },3000)
// }
// function task2(callback)
// {
//     setTimeout(()=>{
//         console.log("iam finction2");
//         callback();

//     },5000)
// }
// function task3(callback)
// {
//     setTimeout(()=>{
//         console.log("iam finction3");
//         callback();

//     },2000)
// }
// function task4(callback)
// {
//     setTimeout(()=>{
//         console.log("iam finction4");
//         callback();

//     },5000)
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("all function completed")
//             })
//         })
//     } )
// })




