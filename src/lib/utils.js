export const randomBetween = (min, max) => Math.random() * (max - min) + min

// Option 1: Return a number directly
export const randomHexColor = () => {
    return Math.floor(Math.random() * 0xffffff)
}

// Option 2: If you need the string format for other purposes,
// you can keep the original function and add a new one
export const randomHexColorString = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16)
    return "0x" + n.slice(0, 6)
}

export const randomHexColorNumber = () => {
    // Remove "0x" prefix and parse as base 16
    return parseInt(randomHexColorString().replace("0x", ""), 16)
}
