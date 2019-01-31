import react from "react"

const Joke = (props) => {
    return (
        <div>
            <p>{props.joke.question}</p>
            <p>{props.joke.answer}</p>
        </div>
    )
}

export default Joke