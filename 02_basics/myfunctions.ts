function addTwo(num: number): number{
    return num + 2
    // return "hi"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}


let myVal = addTwo(5)
getUpper("hey")
signUpUser("name1","name1@gmail.com",true)
loginUser("k", "k@k.com")

// function getVal(myVal: number){
//     if(myVal > 5)
//         return true

//     return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spidey", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg); 
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}


export {}