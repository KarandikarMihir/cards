import flatten from 'lodash/flatten'
import range from 'lodash/range'
import map from 'lodash/map'
const suits = ['Heart', 'Club', 'Diamond', 'Spade']

const customLabels = {
    1: 'A',
    11: 'J',
    12: 'Q',
    13: 'K',
}

const deck = map(suits, (suite) => {
    const cards = map(range(1, 14), (c) => {
        return {
            id: c,
            label: customLabels[c] || c,
            suite,
        }
    })

    return cards
})

export default flatten(deck)
