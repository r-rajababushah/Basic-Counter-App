import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';

import './App.css';

function App() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch()

	const increment = () => {
		dispatch(actions.increment());
	}

	const decrement = () => {
		dispatch(actions.decrement());
	}
	
	return (
		<div>
			<h1>Counter</h1>
			<h2>{counter}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}

export default App;
