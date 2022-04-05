// var a = (a,b=10,...args) => {
//     let total = 0;
//    for(var i in args) total+=args[i];
//    return total;
// }
// z = [20,30,40];
// console.log(a(10,...z));

// var f_name = "Adarsh";
// var m_name = "Singh";
// var l_name = "Chuahan";
// var obj = 
// {
//     f_name,
//     m_name,
//     l_name
// }
// var json_encode = JSON.stringify(obj);
// console.log(typeof(json_encode));
// console.log(typeof(JSON.parse(json_encode)));

var be_true = true;
var promise_data = new Promise((resolve,reject)=>
{
    // resolve(20);
    // reject("resolve12 is not defined");
   
    resolve(20);
    reject(10);
    
});

// promise_data.then((success)=>
// {
//     console.log(success);
// }).catch((error)=>
// {
//     console.log(error);
// });

promise_data.then((get_result)=>console.log(get_result)).catch((get_result)=>{console.log(get_result)});



// if(a==10)
// {
//     console.log(a);
// }
// else
// {
//     console.log(a);
// }

// var a = 10;

// function_exp(10);

// function function_exp(a)
// {
//     console.log(a);
// }