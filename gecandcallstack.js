// const obj={
//     name:"ajith",
//     id : 12,
//     Dept:"it"

// }

// obj.name="kannan"
// console.log(obj);

// nested arrary

// const obj=[{
//         name:"ajith",
//         id : 12,
//         Dept:"it"
    
//     },
// {
//     name:"Vckey",
//         id : 12,
//         Dept:"it"
// },
// {
//     name:"Arun",
//         id : 12,
//         Dept:"it"
// } ]  
// const a=Object.keys(obj[2]);
// console.log(a);
// const b=Object.values(obj[2]);
// console.log(b);


//oject update


// const obj=[{
//         name:"Ajith",
//         id : 11,
//         Dept:"it"
    
//     },
//     {
//         name:"Arun",
//         id : 12,
//         Dept:"it"
    
//     },
//     {
//         name:"vicky",
//         id : 13,
//         Dept:"it"
    
//     },
//     {
//         name:"sakthi",
//         id : 14,
//         Dept:"it"
    
//     }]
    
//     obj[1].name="Kannan"
//     obj[2].id=15
//     obj.pop(obj[3])
//     console.log(obj);


// printing star


// function printstar(n)
//     {
//         for(let i=0;i<n;i++)
//         {
//             let row=''
//         for(let j=0;j<=i;j++)
//         {
//             row+=' * ';
//         }
//         console.log(row);
//     }
// }
// printstar(5)


// function revers()
// {
// let a="Trendlogies"
// for(let i=a.length-1;i>=0;i--)
// {
//     console.log(a[i]);
// }
// }

// function even()
// {
//     for(i=0;i<=10;i++)
//     {
//         if(i%2==0)
//         {
//             console.log(i);
//         }
//     }
// }
// even()








// revers()



// odd r even 
// function odd(n)
// {
//     if(n%2==0)
//     {
//         console.log("the number is even");
//     }
//     else
//     {
//         console.log("the number is odd");
//     }
// }
// odd(10);


// print odd number


// for (i=20;i<=30; i++)
// {
//     if(i%2!==0)
//     {
//         console.log(i);
//     }
// }


// max of array

// let array=[10,25,47,37,53,76]
// let maxofarray=Math.max(...array)
// console.log(maxofarray);



// function time(a)
//     {
// if(hour==9&& minute>5 || hour==10&&minute>5)
// {
//     console.log("madurai and thanjavurbuses will depart")
// }
// else if(hour==10&&minute>10 ||hour==1&&minute>10)
// {
//     console.log("bangalore and mysore buses will depart")
// }
// else{
//     console.log("no one bus is not availabe ")
// }
//     }
// time(10)





// objects

// const obj=[{
    //         name:"ajith",
    //         id : 12,
    //         Dept:"it"
        
    //     },
    // {
    //     name:"Vckey",
    //         id : 12,
    //         Dept:"it"
    // },
    // {
    //     name:"Arun",
    //         id : 12,
    //         Dept:"it"
    // } ]  
    // const a=Object.keys(obj[2]);
    // console.log(a);
    // const b=Object.values(obj[2]);
    // console.log(b);
    
    
    //oject update
    
    
    // const employee=[{
    //         name:"Ajith",
    //         id : 11,
    //         Dept:"it"
        
    //     },
    //     {
    //         name:"Arun",
    //         id : 12,
    //         Dept:"it"
        
    //     },
    //     {
    //         name:"vicky",
    //         id : 13,
    //         Dept:"it"
        
    //     },
    //     {
    //         name:"sakthi",
    //         id : 14,
    //         Dept:"it"
        
    //     },
    //     {
    //         name:"saravanan",
    //         id : 14,
    //         Dept:"it"
        
    //     },
    //     {
    //         name:"aravid",
    //         id : 14,
    //         Dept:"it"
        
    //     },
    //     {
    //         name:"alagar",
    //         id : 14,
    //         Dept:"it"
        
    //     }]
    //     employee[2].name="jai"
    //     employee[2].id=24
    //     employee[2].Dept="cse"
    //     employee[5].name="vino"
    //     employee[5].id=25
    //     employee[5].Dept="ece"
    //     console.log(employee);


// write a for loop for to print the first 10 prime number

// for(let i=2;i<=20; i++)
// {
//     let isprime=true;
// for(let j=2;j<i;j++)
// {
//     if(i%j===0)
//     {
//         isprime=false;
//         break;
//     }
// }
// if(isprime)
// {
//     console.log(i);
// }
// }



// write a while loop to find theb fectorial of given the numner

// let num=3
// let factorial=1
// while(num>0)
// {
//     factorial*=num;
//     num--;
// }
// console.log(factorial)

// itrate of array to prints thery are Element

// let arr=[1,2,3,4,5]
// for(let element of arr)
// {
//     console.log(element);
// }


// creat object and print they are values using for loop

// let obj={a:1,b:2,c:3,d:4}
// for(let prob in obj)
// {
//     console.log(obj[prob]);



// array destructuring

// const arr=["sunday", "monday", "tuesday"]
// const[day1,day2,day3]=arr;
// console.log(day1);


// for method

//1 for each ots used for read an array

// const a=["chocolate","biscute","nuts","cusmetics"]
// a.forEach((val,idx,accarr)=>console.log(val,idx,accarr))

//2 for in(its used for read an objects)


// const obj={
//     name:"sakthi",
//     age:20,
//     dep:"It"
// } 

// for(let x in obj)
// {

// console.log(x+":"+obj[x]);
// }



// for of method(its used for string and array looping)

// let str=[1,2,3,4,5]
// for(let max of str)
// {
//     console.log(max);
// }

// MRF mothod (map,reduce,filter)

// const a=[1,2,3,4,5,6,7,8]
// const b=a.map((val,idx,accarr)=>val*2)
// console.log(b);


// reduce
// const a=[1,2,3,4,5,6,7,8,9]
// const b=a.reduce((acc,val,idx,accarr)=>
// {
//     return acc+ val},5)
//     console.log(b);
