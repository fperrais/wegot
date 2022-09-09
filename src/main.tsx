import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';

import App from './app';

import './index.css';


const muiCache = createCache({
	key: 'mui',
	prepend: true,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<CacheProvider value={muiCache}>
		<App />
	</CacheProvider>,
);
