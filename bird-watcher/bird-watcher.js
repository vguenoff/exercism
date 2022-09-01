// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let totalBirdsCount = 0

    birdsPerDay.forEach(birds => (totalBirdsCount += birds))

    return totalBirdsCount
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
    const birdsInSelectedWeek = birdsPerDay.slice(
        (week - 1) * 7,
        (week - 1) * 7 + 7,
    )

    return totalBirdCount(birdsInSelectedWeek)
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
    birdsPerDay.forEach((bird, i) => (i % 2 === 0 ? birdsPerDay[i]++ : bird))

    return birdsPerDay
}
