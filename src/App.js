import "./App.css";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Joke from "./Joke";

// BEM - Block Element Modifier
// Block is like the components
// ELement is each HTML element

function App() {
    // const name = "Kevin";
    // const isMale = true;

    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // };
    // const decrement = () => {
    //     setCount(count - 1);
    // };

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (e) => {
        e.preventDefault(); // prevents refresh on page when submitting
        console.log(`this is the input: ${input}`);
        setTodos([...todos, input]);
        setInput("");
    };

    useEffect(() => {
        console.log("rerender!")

        return () => {
            console.log("unmouanting")
        }

    }) // Second argument is optional, dependency array []
    /*
        Runs every rerender when there is no []
        When there is an empty [], then it runs once the first time
        Renders when state or prop changes
    */
   
    useEffect(() => {
        console.log("mounted once!!")
    }, [])

    useEffect(() => {
        console.log("input updated!!" + input)

        return () => {
            // Cleanup function
            console.log('clean up!')
        }

    }, [input])

    return (
        <div className="app">
            {/* <Header />
            <h1 className="app__title">Hello {name}!</h1>
            <h2 className="app__title app__title--large">
                You are a {isMale ? "Male" : "Female"}
            </h2>
            {isMale && <h3 className="app__title app__title--small">Bruh</h3>}
            <h1>My counter</h1>
            <p>The count is: {count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button> */}

            {/* <h2 className="error">An error occured</h2>
            <h1>Products</h1>
            <Product
                name="Amazon Echo"
                description="Your AI asstitant"
                price={59.99}
            />
            <Product
                name="iPhone 12 Pro Max"
                description="the best iPhone"
                price={1200}
            />
            <Product
                name="Macbook Pro"
                description="Your favorite computer"
                price={2500}
            /> */}

            <h1>Welcome to my todo list</h1>
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                />
                <button type="submit" onClick={addTodo}>Add todo</button>
            </form>

            <h2>List of Todos</h2>
            {todos.map((todo) => (
                <p>{todo}</p>
            ))}

            <Joke />
        </div>
    );
}

export default App;
