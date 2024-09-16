import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Hotels from './Hotels';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<App />} />
					<Route path='/hotels' element={<Hotels />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
