let score: number | string = 33

score = 44
score = "77"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let krishna: User | Admin = {name: "krishna", id: 5}

krishna = {username: "krish", id: 5}

// function getDbId(id: number | string){
//     //API calls here
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    // id.toLowerCase()    -> cant do this directly since id: number | string
    if(typeof id === "string"){
        id.toLowerCase()
    }    
}


//array

const data: number[] = [1,2,3,4]
const data2: string[] = ["1", "2"]
const data3: (string | number | boolean)[] = [1,2,3]    // this means either an entire array consists of string, number OR boolean


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" -> won't allow since there can be only 3 types - aisle, middle, window