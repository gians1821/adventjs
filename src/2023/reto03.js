const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
  let weightGifts = 0
  let weightReindeers = 0
  packOfGifts.forEach(gift => {
    weightGifts += gift.length
  });
  reindeers.forEach(reindeer => {
    weightReindeers += (2 * reindeer.length)
  })
  return Math.floor(weightReindeers / weightGifts)
}

distributeGifts(packOfGifts, reindeers) // 2
