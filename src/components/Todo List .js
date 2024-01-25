import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function TodoList() {

    const fruit = useRef('');
    var fruitList = [];
    fruitList = useSelector((state) => state.fruitList);
    const dispatch = useDispatch();
    console.log(fruitList);

    function saveFruitToStore(event) {
        const action = { type: "Save", fruit: fruit.current.value }
        dispatch(action)
        event.preventDefault()
    }

    return (
        <>
            <h1>TodoList</h1>
            <form>

                <div>
                    <label>Enter Fruit : </label>
                    <input type='text' name='fruit' ref={fruit} />
                </div>
                <button onClick={saveFruitToStore} >Submit</button>

            </form>
            <h1>Stored details : </h1>
            {null != fruitList && fruitList.length > 0 ?
                <ul>
                    {
                        fruitList.map((fruit) => {
                            return <li>{fruit}</li>
                        })
                    }
                </ul> :
                <p>Nothing to Show.....</p>
            }
        </>
    )
}

export default TodoList
