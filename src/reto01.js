const gifts = ['cat', 'game', 'socks']

function wrapping (gifts) {
  const wrap = '*'
  let wrappedGifts = []

  gifts.forEach(gift => {
    const externalWrap = 2
    const lengthWrap = gift.length + externalWrap
    
    let gifted = ''
    for (let i = 0; i < lengthWrap; i++) {
      gifted += wrap      
    }

    const wrappedGift = `${gifted}\n${wrap}${gift}${wrap}\n${gifted}`

    wrappedGifts.push(wrappedGift)
  });

  return wrappedGifts
}

const wrapped = wrapping(gifts)

console.log(wrapped)
