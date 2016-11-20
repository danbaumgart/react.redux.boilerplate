export default {
  properCase : (...parts) => parts.map(str => str.charAt(0).toUpperCase() + str.replace(/[A-Z]/g, match => ' ' + match).slice(1)).join(' ')
};
