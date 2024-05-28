export default function appendToEachArrayValue(array, appendString) {
  for (let i = 0; i < array.length; i++) { // eslint-disable-line no-plusplus
    array[i] = appendString + array[i]; // eslint-disable-line no-param-reassign
  }

  return array;
}
