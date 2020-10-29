const { expect } = require("@jest/globals")


const fb = require("../fizzbuzz")

test("Test isFizzy", () => {
    expect(fb.isFizzy(3)).toBe(true)
    expect(fb.isFizzy(1)).toBe(false)
    expect(fb.isFizzy(9)).toBe(true)
    expect(fb.isFizzy(102)).toBe(true)
    expect(fb.isFizzy(2)).toBe(false)
})


test("Test isBuzzy", () => {
    expect(fb.isBuzzy(5)).toBe(true)
    expect(fb.isBuzzy(100)).toBe(true)
    expect(fb.isBuzzy(12)).toBe(false)
    expect(fb.isBuzzy(6)).toBe(false)
    expect(fb.isBuzzy(105)).toBe(true)
    expect(fb.isBuzzy(1)).toBe(false)
})

