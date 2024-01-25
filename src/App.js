import React from 'react';
import { Provider } from 'react-redux';
import UserStore from './components/redux/UserStore';
import TodoList from './components/Todo List ';

function App() {

    return (
        <>

            <Provider store={UserStore}>
                <TodoList />
            </Provider>

        </>
    );
}

export default App;