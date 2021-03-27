import React, { useEffect, useState, useRef } from "react";
import useRandomJoke from "./useRandomJoke";

function Joke() {
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const joke = useRandomJoke(firstName, lastName);

    // Custom Hook
    // const joke = useRandomJoke("Kevin", "Barta")

    const generateJoke = (e) => {
        e.preventDefault();

        setFirstName(firstNameRef.current.value)
        setLastName(lastNameRef.current.value)
    }

    return (
        <div>
            <h1>Jokes on you!</h1>
            <h2>{joke}</h2>

            <form>
                <input
                    placeholder="first name"
                    type="text"
                    ref={firstNameRef}
                />
                <input
                    placeholder="last name"
                    type="text"
                    ref={lastNameRef}
                />
                <button type="submit" onClick={generateJoke}>Generate Joke</button>
            </form>
        </div>
    );
}

export default Joke;
