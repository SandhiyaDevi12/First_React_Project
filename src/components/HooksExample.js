import React from 'react'
{

    import React, { useContext, useEffect, useState } from 'react'
    import UserDetails from './UserContext'

    /**
     * useState()
     * 
     *  datatype [ state_name, setState_name ] = useState(default_value);
     * 
     * useEffect()
     * 
     *  useEffect( () => {
     *      functions
     *  } )
     * 
     * useContext()
     * 
     *  data_type context_variable_name = useContext( context_name );
     * 
     */

    function HooksExample() {

        let [firstName, setFirstName] = useState("Ramesh")
        let [age, setAge] = useState(25)
        let userDetails = useContext(UserDetails);

        const updateFirstName = () => {
            setFirstName("Dinesh");
        }

        function updateAge() {
            setAge(30)
        }

        useEffect(() => {
            alert("useEffect working fine....")
        })

        return (
            <>
                <h1>Hooks Example</h1>
                <p>FristName : {firstName}</p>
                <p>Age : {age}</p>
                <button onClick={updateFirstName}>Update Name</button>
                <button onClick={updateAge}>Update Age</button>
                <h3>Context Api Example</h3>

                <p>Name : {userDetails.name}</p>
                <p>Age : {userDetails.age}</p>
                <p>Address : {userDetails.address}</p>

            </>
        )
    }

    export default HooksExample;
