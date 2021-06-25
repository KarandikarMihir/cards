import { useState } from 'react'
import size from 'lodash/size'
import concat from 'lodash/concat'
import filter from 'lodash/filter'
import random from 'lodash/random'
import deck from './deck'

const MAX_CARDS = 5

const useDealCards = () => {
    // This can be improved, but 2 containers
    // allows the UI to show recently drawn cards
    const [selectableCards, setSelectableCards] = useState(deck)
    const [drawnCards, setDrawnCards] = useState([])

    const drawCards = () => {
        const next5Cards = []
        let nextSelectableCards = selectableCards

        // Draw remaining cards if less than MAX_CARDS
        if (size(nextSelectableCards) < MAX_CARDS) {
            setDrawnCards(concat(nextSelectableCards, drawnCards))
            setSelectableCards([])
            return
        }

        for (let i = 0; i < MAX_CARDS; i++) {
            const nextCardIndex = random(0, size(nextSelectableCards) - 1)
            const drawnCard = nextSelectableCards[nextCardIndex]
            next5Cards.push(drawnCard)

            // Could be improved
            nextSelectableCards = filter(nextSelectableCards, (_, index) => index !== nextCardIndex)
        }

        setDrawnCards(concat(next5Cards, drawnCards))
        setSelectableCards(nextSelectableCards)
    }

    return {
        selectableCards,
        drawnCards,
        drawCards,
    }
}

export default useDealCards
