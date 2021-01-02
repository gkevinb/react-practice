import "./App.css";
import Header from "./Header";


// BEM - Block Element Modifier
// Block is like the components
// ELement is each HTML element

function App() {
    const name = "Kevin";
    const isMale = true;

    return (
        <div className="app">
            <Header />
            <h1 className="app__title">Hello {name}!</h1>
            <h2 className="app__title app__title--large">You are a {isMale ? "Male" : "Female"}</h2>
            {isMale && <h3 className="app__title app__title--small">Bruh</h3>}
        </div>
    );
}

export default App;
