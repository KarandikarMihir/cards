const Card = ({ id, label, suite }) => {
    return (
        <div
            className="flex relative bg-white m-2 items-center justify-center rounded shadow-lg"
            style={{ height: 250, width: 150 }}>
            <div className="absolute" style={{ left: 20, top: 20, fontSize: 28 }}>
                {label}
            </div>
            <img src={`assets/${suite}.png`} alt={`${label} of ${suite}`} className="inline" style={{ width: 50 }} />
        </div>
    )
}

export default Card
