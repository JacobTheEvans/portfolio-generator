export function toCapitalize (str) {
  if (typeof str !== 'string') throw new Error('Value must be type str')
  let temp = str[0].toUpperCase()
  temp += str.slice(1).toLowerCase()
  return temp
}
