

const API = "https://api.github.com/users/saurabh2059"

// const promise = fetch(API);
// let response = {}
// const data= promise.then(function(data){
//    return data.json();
   
// }).then((res)=> console.log(res))
// .catch(e=> console.log(e));



let resp = fetch(API).then(data=>data.json()).then(res=> console.log(res))










