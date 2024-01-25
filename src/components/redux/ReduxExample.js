

import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReduxExample() {

    const count = useSelector((state) => state.count);
    const storedFirstName = useSelector((state) => state.userDetails.firstName);
    const storedLastName = useSelector((state) => state.userDetails.lastName);
    const storedAge = useSelector((state) => state.userDetails.Age);

    const dispatch = useDispatch();
    const firstName = useRef('');
    const lastName = useRef('');
    const Age = useRef('');



    function increment() {
        const action = { type: "Increment" }
        dispatch(action);
    }

    function decrement() {
        dispatch({ type: "Decrement" })
    }

    function saveFormValues(event) {
        const userDetails = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            Age: Age.current.value,

        }
        dispatch({ type: "Save", userDetails: userDetails })
        event.preventDefault();
    }

    return (
        <>
            <h1>Redux Example</h1>
            <div>
                <p>Count : {count} </p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <form>
                <div>
                    <label>First Name : </label>
                    <input type='text' ref={firstName} />
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type='text' ref={lastName} />
                </div>
                <div>
                    <label> Age : </label>
                    <input type='text' ref={Age} />
                </div>
                <button onClick={saveFormValues} >Submit</button>
            </form>
            <div>
                <p>Stored First Name : {storedFirstName}</p>
            </div>
            <div>
                <p>Stored Last  Name : {storedLastName}</p>
            </div>
            <div>
                <p> Age: {storedAge}</p>
            </div>
        </>
    )
}

export default ReduxExample;