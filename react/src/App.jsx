import React from 'react'; // Notice useEffect is imported here
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, zero } from './redux/store';
import store from './redux/store'; // Only needed for manual subscription

const App = () => {
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();

    console.log('App rendered', store.getState());

    return (
        <div>
            <h1>Counter: {counter}</h1>
           
            <button onClick={() => dispatch(increment())}>Increment</button>
            
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(zero())}>Reset</button>
        </div>
    );
};

export default App;
