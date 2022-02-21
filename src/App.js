import {useMyContext} from "./MyContext";

function App() {
    const [context, setContext] = useMyContext()
    return (
        <div className="App">
            ...
            <h1>{context}</h1>
            ...
        </div>
    );
}

export default App;
