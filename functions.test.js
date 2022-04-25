const { returnTwo, greeting, add, multiply, divide, subtract } = require("./functions");

require("./functions");

describe("returnTwo tests", () => {
    it("should equal 2", () => {
        expect(returnTwo()).toEqual(2)
    }) 
})

describe("greeting tests", () => {
    it("should return with input name", () => {
        expect(greeting('James')).toEqual('Hello, James');
    })
    it("should return with input name", () => {
        expect(greeting('Jill')).toEqual('Hello, Jill');
    })
})

describe("add tests", () => {
    it("should produce correct sum", () => {
        expect(add(1,2)).toEqual(3);
    })
    it("should produce correct sum", () => {
        expect(add(5,9)).toEqual(14);
    })
})

describe("Math functions", () => {
    it("should return correct product", () => {
        expect(multiply(3,3)).toEqual(9)
    })
    it("should return correct product", () => {
        expect(multiply(10,3)).toEqual(30)
    })
    it("should return correct quotient", () => {
        expect(divide(10,2)).toEqual(5)
    })
    it("should return correct quotient", () => {
        expect(divide(100,2)).toEqual(50)
    })
    it("should return correct difference", () => {
        expect(subtract(35,12)).toEqual(23)
    })
    it("should return correct difference", () => {
        expect(subtract(5,2)).toEqual(3)
    })
})