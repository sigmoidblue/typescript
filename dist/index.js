"use strict";
// class User{
//     //default declaration is public
//     email: string
//     name: string
//     private readonly city: string = ""
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name 
//         this.city 
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const krish = new User("k@k.com", "kb");
// krish.deleteToken() -> not accessible
