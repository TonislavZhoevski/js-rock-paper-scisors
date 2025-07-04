function arraySwap (array) {
    const lastIndex = array.length - 1;
    
    // We need to save the values first before
    // swapping. Otherwise, if we swap directly,
    // we wouldlose one of the values
    const lastValue = array[lastIndex];
    const firstValue = array[0];

    array[0] = lastValue;
    array[lastIndex] = firstValue;

    return array;
}

console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hi', 'hello', 'good']));