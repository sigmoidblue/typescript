"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function indentityThree(val) {
    return val;
}
// indentityThree("3")
function indentityFour(val) {
    return val;
}
// indentityFour<Bottle>({brand: "idk", type: 4})
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    //method
    addToCart(product) {
        this.cart.push(product);
    }
}
