interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrial: () => string     ->a way to define
    startTrial(): string
    getCoupon(couponName: string): number
}

//re-opening of the interface
interface User{
    githubToken: string
}

//inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const krish: Admin = {
    dbId: 44, 
    role: "admin",
    email: "k@krish.com", 
    userId: 4325,
    githubToken: "sefwer",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "kb") =>{
        return 3
    }
}
krish.email = "k@k.com"
