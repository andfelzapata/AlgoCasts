const { maxChar, maxCharV2 } = require("./index")

describe("maxChar", () => {
  test("maxChar function exists", () => {
    expect(typeof maxChar).toEqual("function")
  })

  test("Finds the most frequently used char", () => {
    expect(maxChar("a")).toEqual("a")
    expect(maxChar("abcdefghijklmnaaaaa")).toEqual("a")
  })

  test("Works with numbers in the string", () => {
    expect(maxChar("ab 1c 1d1e1f1g1 ")).toEqual("1")
  })
})

describe("maxCharV", () => {
  test("maxChar function exists", () => {
    expect(typeof maxCharV2).toEqual("function")
  })

  test("Finds the most frequently used char", () => {
    expect(maxCharV2("a")).toEqual("a")
    expect(maxCharV2("abcdefghijklmnaaaaa")).toEqual("a")
  })

  test("Works with numbers in the string", () => {
    expect(maxCharV2("ab 1c 1d1e1f1g1 ")).toEqual("1")
  })
})