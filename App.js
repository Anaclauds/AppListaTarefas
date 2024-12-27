import React from 'react';
import { TodoProvider } from './TodoContext';
import HomeScreen from './Homescreen';

const App = () => {
    return (
        <TodoProvider>
            <HomeScreen />
        </TodoProvider>
    );
};

export default App;