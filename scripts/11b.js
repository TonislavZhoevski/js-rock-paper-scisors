function getLastValue (array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

console.log(getLastValue([1,20,22,24,5]));
console.log(getLastValue(['hi', 'hello', 'good']));