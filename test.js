const { equal, some, both, or, every, greater, less } = require('./index.js') 
const {  is, returnsTrue, returnsFalse } = require('./helper.js')

describe('every()', ()=>{

  it('should be a higher order funciton.', ()=>{

    let args = ['1', '2', 2]
  
    const string_singleChar = every(is.string, is.singleChar)

    expect(is.function(string_singleChar)).toBe(true)

  })

  it('should return true if every function validates to true.', ()=>{

    let args = ['1', '2', 2]

    const string_singleChar = every(is.string, is.singleChar)

    expect(args.every(string_singleChar)).toBe(false)

    args = ['2','sdf','']

    expect(args.every(string_singleChar)).toBe(false)

    args = [2, 3, 3]

    expect(args.every(string_singleChar)).toBe(false)

    args = ['s', 'b', 'x']

    expect(args.every(string_singleChar)).toBe(true)
    
  })

})

describe('both()', ()=>{

  it('should be a higher order function.', ()=>{

    const string_singleChar = both(is.string, is.singleChar)

    expect(is.function(string_singleChar)).toBe(true)
  
  })

  it('should return true if one of the functions validates to true.', ()=>{

    let args = ['1', '2', 2]

    const string_singleChar = both(is.string, is.singleChar)

    expect(args.every(string_singleChar)).toBe(false)

    args = ['2','sdf','']

    expect(args.every(string_singleChar)).toBe(false)

    args = [2, 3, 3]

    expect(args.every(string_singleChar)).toBe(false)

    args = ['ss', 'b', 'x']

    expect(args.every(string_singleChar)).toBe(false)

    args = 3

    expect(string_singleChar(3)).toBe(false)


  })

})

describe('or()', ()=>{

  it('should be a higher order function', ()=>{

    const string_singleChar = or(is.string, is.singleChar)

    expect(is.function(string_singleChar)).toBe(true)

  })

  it('should return true if one of the functions returns true', ()=>{

    const string_singleChar = or(is.string, is.singleChar)

    expect(string_singleChar('sdf')).toBe(true)

    expect(string_singleChar(3)).toBe(false)

    expect(string_singleChar('')).toBe(true)

  })

})

describe('some()', ()=>{

  it('should be a higher order function', ()=>{

    const string_singleChar = some(is.string, is.singleChar, is.function)

    expect(is.function(string_singleChar)).toBe(true)

  })

  it(`should return true if one the functions to validate passes
    the test`, ()=>{

    const string_or_singleChar = some(is.string, is.singleChar, is.function)

    expect(string_or_singleChar('2')).toBe(true)

    expect(string_or_singleChar('sd')).toBe(true)

  })

})

describe('greater()', ()=>{

   it(`should return true if the value passed to greater() is greater than value 
     passed to than()`,
     ()=>{

    let greater2than = greater(2).than

    expect(greater2than(1)).toBe(true)

  })

})

describe('less()', ()=>{

  it(`should return true if the value passed to greater() is greater than value 
     passed to than()`, ()=>{

    let less2than = less(2).than

    expect(less2than(3)).toBe(true)

    expect(less2than(1)).toBe(false)

    expect(less2than(2)).toBe(false)

  })

})



describe('equal()', ()=>{

  it('should be a higher order function', ()=>{

    const string_singleChar = equal(is.string, is.singleChar, is.function)

    expect(is.function(string_singleChar)).toBe(true)

  })

  it(`should return true if the values returned are equal.`, ()=>{

    let user = { name: 'allan' }

    const doNothing = (u) => u

    const sayHiToUser = (u) => {
      console.log('sayign hi');
      return u
    }

    let equals = equal(doNothing, sayHiToUser )

    expect(equals(user)).toBe(true)

    const modifyUser = (user) => {
      user.lastname = 'poe'
    }

    equals = equal(modifyUser, sayHiToUser )

    expect(equals(user)).toBe(false)

  })

})
