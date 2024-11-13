// code1
// for (const x=0 ; x<5;x++ ){
//     console.log(x);
// }
// chatgpt code 
// const x = 0;

// for ( i = 1; i < 5; i++) {
//     console.log(i);
// }

// for (const x = [0]; x[0] < 5; x[0]++) {
//     console.log(x);
// }
// let x=0.1+0.2;
// let y=0.3;
// console.log(x==y)
// let x=3>2>1
// console.assertlog(x)

// let x=false;
// let y="0";
// let z=0;
// console.log(x==y);
// console.log(x==z);


// let x=Infinity;
// console.log(typeof(x))

// let x=true;
// let y=false;
// let z=x+y&&x*y;
// console.log(z)

// let x="false";
// let y=!x;
// console.log(y)

// let x=1;
// let y="1";
// // console.log(++x,++y);
// console.log(++y,++x)

// console.log(++y,++x)
// let x=1
// console.log(x+x++);
// let x="5";
// let y=3;
// console.log(x-y);

// let x=7;
// let y=typeof(x).lengh;
// console.log();

// let salary=[1000,255,4000,4322,100]
// salary.map((ele) => {
//     console.log(ele);


// })
// let salary=[1000,255,4000,4322,100]
// salary.forEach((ele) => {
//     console.log(ele);


// })
// let salary=[1000,255,4000,4322,100]
// salary.filter((ele) => {
//     console.log(ele);
// })


// let salary=[1000,255,4000,4322,100]
// salary.find((ele) => {
//     console.log(ele);
// })

// for of
// let salary=[1000,255,4000,4322,100]
// for(let ele of salary){
//     console.log(ele);
    
// }
// for in
// let family={name:"any",salary:4000, age:20}
// for(let ele in family){
//     console.log(family[ele]);
// }

// Reduce
// let res =salary.reduce((total,ele) => {
//     return total=total+ele
// },0)





// ###########    API     ########
// let myHttpPosts =new XMLHttpRequest();
// let myHttpUsers =new XMLHttpRequest();
// let myHttpComments= new XMLHttpRequest();
// let Posts= [];
// let Users=[];
// let Comments=[];

// function getDataPosts(callback) {
//     myHttpPosts.open(`Get`,`https://jsonplaceholder.typicode.com/posts`);
//     myHttpPosts.send();
//     myHttpPosts.addEventListener('readystatechange',function(){
//         if(myHttpPosts.readyState==4 && myHttpPosts.status===200){
//             Posts=JSON.parse(myHttpPosts.response);
//             console.log("Posts");
//             console.log(Posts);
//             callback();
//         }
//     })
    
// }
// function getDataComments(callback) {
//     myHttpComments.open(`Get`,`https://jsonplaceholder.typicode.com/Comments`);
//     myHttpComments.send();
//     myHttpComments.addEventListener('readystatechange',function(){
//         if(myHttpComments.readyState==4 && myHttpComments.status===200){
//             Comments=JSON.parse(myHttpComments.response);
//             console.log("Comments");
//             console.log(Comments);
//             callback();
//         }
//     })
    
// }
// function getDataUsers(callback) {
//     myHttpUsers.open(`Get`,`https://jsonplaceholder.typicode.com/Users`);
//     myHttpUsers.send();
//     myHttpUsers.addEventListener('readystatechange',function(){
//         if(myHttpUsers.readyState==4 && myHttpUsers.status===200){
//             Users=JSON.parse(myHttpUsers.response);
//             console.log("Users");
//             console.log(Users);
//             callback();
//         }
//     })
    
// }
// function x(){
//     console.log("object");
    
// }
// getDataPosts(function(){
//     getDataComments(function(){
//         getDataUsers(function(){
//             x();
//         });
//     })
// });



let Posts= [];
function getDataPosts(callback,data) {
    let myHttpPosts =new XMLHttpRequest();
    myHttpPosts.open(`Get`,`https://jsonplaceholder.typicode.com/${data}`);
    myHttpPosts.send();
    myHttpPosts.addEventListener('readystatechange',function(){
        if(myHttpPosts.readyState==4 && myHttpPosts.status===200){
            Posts=JSON.parse(myHttpPosts.response);
            console.log(data);
            console.log(Posts);
            callback();
        }
    })
    
}
function x(){
    console.log("object");
    
}
getDataPosts(function(){
    getDataPosts(function(){
        getDataPosts(function(){
            x();
        }, 'posts'); 
    }, 'comments'); 
}, 'users');


