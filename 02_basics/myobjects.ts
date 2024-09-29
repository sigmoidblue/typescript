// const User = {
//     name: "kb",
//     email: "k@k.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// createUser({name: "k", isPaid: true})

// let newUser = {name: "k", isPaid: true, email: "k@b.com"}

// createUser(newUser)



// function createCourse():{name: string, price: number}{
//     return {name:"reactjs",price: 499}
// }




//type

// type User = {
//     name: string;
//     email: string; 
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})




type User = {
    readonly _id: string    //readonly
    name: string
    email: string
    isActive: boolean
    credsDetails?: number   //optional - ?
}

let myUser: User = {
    _id: "1234",
    name: "j",
    email: "k@k.com",
    isActive: false
}

myUser.email = "h@gmail.com"
// myUser._id = "ere"  -> can't cus readonly


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { // not a good practice to define here
    cvv: number
}


export {}