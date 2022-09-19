const {divide,sum, multiply, subtract} = require("./math")


describe('Math', () => {
    it(" should sum 2 + 2 to be 4",()=>{
    const result = sum(2,2)
    expect(result).toBe(4)
    })
    it(" should multiply 3 * 3 to be 9",()=>{
        const result = multiply(3,3)
        expect(result).toBe(9)
    })
    it(" should divide 9 / 3 to be 3",()=>{
        const result = divide(9,3)
        expect(result).toBe(3)
    })
    it(" should multiply 5 - 3 to be 2",()=>{
        const result = subtract(5,3)
        expect(result).toBe(2)
    })

  
})

describe('Array', () => {
    let days= ['monday','Tuesday','Wednesday'];
    expect(days).toContain('Tuesday')
    expect(days).not.toContain('Friday')
  
})

