const enhancer = require("./enhancer.js");
// test away!

it("works", () => {
  expect(4).toBe(4);
});

describe("enhancer.js testing", () => {
    let item;
    beforeEach(() => {
        item = {
            name: "sword",
            durability: 50,
            enhancement: 10
        }
    })
    it("exists", ()=> {
        expect(enhancer).toBeDefined();
    })
    describe("repair function testing", () => {
        it("sets durability to 100", () => {
            const expected = {
                name: "sword",
                durability: 100,
                enhancement: 10
            }
            const actual = enhancer.repair(item);
            expect(actual).toEqual(expected)
        })

    })
    describe("enhancement success testing", () => {
        it("success increases enhancement by 1", () => {
            const expected = {
                name: "sword",
                durability: 50,
                enhancement: 11
            }
            const actual = enhancer.success(item);
            expect(actual).toEqual(expected)
        })
        it("does not increase if enhancement=20", () => {
            item = {
                name: "sword",
                durability: 50,
                enhancement: 20
            }
            const expected = {
                name: "sword",
                durability: 50,
                enhancement: 20
            }
            const actual = enhancer.success(item);
            expect(actual).toEqual(expected)
        })
    })
    describe("enhancement fail testing", () => {
        it("durability decreases by 5 if enhancement < 15", () => {
            const expected = {
                name: "sword",
                durability: 45,
                enhancement: 10
            }
            const actual = enhancer.fail(item);
            expect(actual).toEqual(expected)
        })
        it("durability decreases by 10 if enhancement > 15", () => {
            item = {
                name: "sword",
                durability: 50,
                enhancement: 15
            }
            const expected = {
                name: "sword",
                durability: 40,
                enhancement: 15
            }
            const actual = enhancer.fail(item);
            expect(actual).toEqual(expected)
        })
        it("enhancement decreases by 1 if enhancement > 16", () => {
            item = {
                name: "sword",
                durability: 50,
                enhancement: 17
            }
            const expected = {
                name: "sword",
                durability: 40,
                enhancement: 16
            }
            const actual = enhancer.fail(item);
            expect(actual).toEqual(expected)
        })
    })
})