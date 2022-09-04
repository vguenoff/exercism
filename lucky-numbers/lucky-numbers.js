// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    const returnSum = arr =>
        Number(arr.reduce((acc, curVal) => (acc += String(curVal)), ''))

    return returnSum(array1) + returnSum(array2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    const luckyNumberArr = String(value).split('')

    return luckyNumberArr.reduce(
        (acc, curVal, i) => acc && curVal === [...luckyNumberArr].reverse()[i],
        true,
    )
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    if (input === null || input === undefined || input.length === 0) {
        return 'Required field'
    } else if (isNaN(Number(input)) || Number(input) === 0) {
        return 'Must be a number besides 0'
    } else {
        return ''
    }
}
