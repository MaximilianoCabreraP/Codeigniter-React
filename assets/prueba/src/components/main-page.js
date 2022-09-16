import React from "react"; //Comentar para q funcione en Localhost

const fakeQuotes = [
    { quote: "Gah, stupid sexy Flanders!" },
    { quote: "Eat my shorts" },
    { quote: "Shut up, brain. I got friends now. I don't need you anymore" },
];


// const MainPage = ({ React }) => { //Descomentar para q funcione en localhost
const MainPage = () => { // Descomentar para q funcione en test
    React.useEffect(() => {
        () => fetch("/quotes")
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>simpsons quote</h1>

            <ul>
                {fakeQuotes.map(({ quote }) => (
                    <li key={quote}>{quote}</li>
                ))}
            </ul>
        </div>
    )
}

export default MainPage