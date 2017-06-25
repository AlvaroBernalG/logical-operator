module.exports = {
  string (target) {
    return target instanceof String || typeof target === 'string'
  },
  number (target) {
    return typeof target === 'number'
  },
  date (target) {
    return target instanceof Date
  },
  singleChar (target) {
    return target.length === 1
  },
  function (target) {
    return typeof target === 'function'
  }
}
