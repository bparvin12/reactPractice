import react from "react"

import Joke from "./components.joke.js"

const App = () => {
    return (
        <div>
            <Joke 
                joke={{Question: "Why did the salad for to the studio?", Answer: "To get some beats"}}/>
        </div>
    )
}

export default App