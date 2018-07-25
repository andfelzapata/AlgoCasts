const { reverse, reverseV2, reverseV3 } = require("./index")

describe("reverse", () => {
  test("Reverse function exists", () => {
    expect(reverse).toBeDefined()
  })

  test("Reverse reverses a string", () => {
    expect(reverse("abcd")).toEqual("dcba")
  })

  test("Reverse reverses a string", () => {
    expect(reverse("  abcd")).toEqual("dcba  ")
  })
})

describe("reverseV2", () => {
  test("Reverse function exists", () => {
    expect(reverseV2).toBeDefined()
  })

  test("Reverse reverses a string", () => {
    expect(reverseV2("abcd")).toEqual("dcba")
  })

  test("Reverse reverses a string", () => {
    expect(reverseV2("  abcd")).toEqual("dcba  ")
  })
})

describe("reverseV3", () => {
  test("Reverse function exists", () => {
    expect(reverseV3).toBeDefined()
  })

  test("Reverse reverses a string", () => {
    expect(reverseV3("abcd")).toEqual("dcba")
  })

  test("Reverse reverses a string", () => {
    expect(reverseV3("  abcd")).toEqual("dcba  ")
  })
});
