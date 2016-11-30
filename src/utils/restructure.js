export default {
  string: {
    properCase : (...parts) => parts.map(str => str.charAt(0).toUpperCase() + str.replace(/[A-Z]/g, match => ' ' + match).slice(1)).join(' ')
  },
  object: {
    removeProperties: (obj, ...properties) => obj && Object.assign({}, ...Object.keys(obj).filter(errorKey => !properties.find(property => property.toLowerCase() === errorKey.toLowerCase())).map(key => Object.assign({}, {[key]: obj[key]}))),
  }
  // arrays: {
  //   reduceFieldErrors: (current, update) => [...current.filter(original => update.includes(original))]
  // }
};
