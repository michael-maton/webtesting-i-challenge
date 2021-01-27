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

    })
})