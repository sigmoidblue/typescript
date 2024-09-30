const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any):any{
    return val
}

function indentityThree<Type>(val: Type): Type{
    return val
}

// indentityThree("3")

function indentityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string,
    type: number
}

// indentityFour<Bottle>({brand: "idk", type: 4})



function getSearchProducts<T>(products: T[]): T{
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}

interface Database{
    connection: string, 
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object{
    return{
        valOne, 
        valTwo
    }
}

// anotherFunction(2,{})


interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string
    author: string
    subject: string
}

class Sellable<T>{
    public cart: T[] = []
    //method
    addToCart(product: T){
        this.cart.push(product)
    }
}