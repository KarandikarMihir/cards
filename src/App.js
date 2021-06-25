import Card from 'components/Card'
import size from 'lodash/size'
import map from 'lodash/map'
import useDrawCards from './useDrawCards'

const App = () => {
    const { selectableCards, drawnCards, drawCards } = useDrawCards()
    const cardsLeft = size(selectableCards)

    return (
        <div className="mb-12">
            <p className="text-white absolute right-2 top-2 hover:underline">
                <a href="https://github.com/KarandikarMihir/cards" target="_blank" rel="noreferrer">
                    {'Github'}
                </a>
            </p>
            <div className="flex justify-center items-center p-4 flex-col md:flex-row">
                <div
                    style={{ height: 250, width: 150 }}
                    className="bg-gray-800 rounded flex items-center justify-center text-center text-white">
                    {`Da Deck has ${cardsLeft} cards!`}
                </div>
                <button
                    className="bg-green-200 p-4 rounded-xl disabled:opacity-50 m-4 active:bg-green-900 active:text-white"
                    onClick={drawCards}
                    disabled={!cardsLeft}>
                    {'Draw Cards'}
                </button>
            </div>
            <div className="flex flex-wrap justify-center">
                {map(drawnCards, (card) => (
                    <Card key={`${card.suite}-${card.id}`} {...card} />
                ))}
            </div>
        </div>
    )
}

export default App
