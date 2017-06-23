const every = (...validation) => (target)=> {
  return validation.reduce((prev,next) => prev && next(target) , validation[0](target))
}

const some = (...validation) => (target)=> {
  return validation.reduce((prev,next) => prev || next(target) , validation[0](target))
}

const or = (first, second) => (target)=> first(target) || second(target)

const both = (first, second) => (target)=> first(target) && second(target)

const greater = (one) => ({
  than: (second)=> one > second
})

const less = (one) => ({
  than: (second)=> one < second
})

const equal = (first, second) => (target) =>  first(target) === second(target) 

module.exports = { some, both, or, every, greater, less, equal }
