/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  // Code here
  return [...new Set(gifts.sort((a, b) => a - b))];
}
