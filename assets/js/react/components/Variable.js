const Variable = ({ variable }) => {
    return (
        <div>
            <h3>Variable</h3>
            <p>Make: {variable.make}</p>
            <p>Model: {variable.model}</p>
            <p>Year: {variable.year}</p>
        </div>
    )
}

export default Variable