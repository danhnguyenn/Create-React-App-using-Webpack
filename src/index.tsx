import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root') as HTMLElement);

const App = () => {
	return <h1>My React and Typescript App!</h1>;
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
