const { reverseInt, reverseIntV2 } = require("./index")

describe("reverseInt", () => {
  test("ReverseInt function exists", () => {
    expect(reverseInt).toBeDefined()
  })

  test("ReverseInt handles 0 as an input", () => {
    expect(reverseInt(0)).toEqual(0)
  })

  test("ReverseInt flips a positive number", () => {
    expect(reverseInt(5)).toEqual(5)
    expect(reverseInt(15)).toEqual(51)
    expect(reverseInt(500)).toEqual(5)
    expect(reverseInt(90)).toEqual(9)
    expect(reverseInt(2359)).toEqual(9532)
  })

  test("ReverseInt flips a negative number", () => {
    expect(reverseInt(-5)).toEqual(-5)
    expect(reverseInt(-15)).toEqual(-51)
    expect(reverseInt(-90)).toEqual(-9)
    expect(reverseInt(-2359)).toEqual(-9532)
  })
});

describe("reverseIntV2", () => {
  test("ReverseInt function exists", () => {
    expect(reverseIntV2).toBeDefined()
  })

  test("ReverseInt handles 0 as an input", () => {
    expect(reverseIntV2(0)).toEqual(0)
  })

  test("ReverseInt flips a positive number", () => {
    expect(reverseIntV2(5)).toEqual(5)
    expect(reverseIntV2(15)).toEqual(51)
    expect(reverseIntV2(500)).toEqual(5)
    expect(reverseIntV2(90)).toEqual(9)
    expect(reverseIntV2(2359)).toEqual(9532)
  })

  test("ReverseInt flips a negative number", () => {
    expect(reverseIntV2(-5)).toEqual(-5)
    expect(reverseIntV2(-15)).toEqual(-51)
    expect(reverseIntV2(-90)).toEqual(-9)
    expect(reverseIntV2(-2359)).toEqual(-9532)
  })
})