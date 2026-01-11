async function hanldePromise(){

    // try{
    const data = await fetch("https://dummyjson.com/products")
    const res = await data.json()

    // it is also a promise
    console.log(res)

    // }catch(err){
    //     console.log(err)
    // }
}

hanldePromise().catch(e=> console.log(e));

// how fetch works

/**
 

fetch is a promise that returns response object which is in redable stream format , which in turn we convert to json to read the data
 */