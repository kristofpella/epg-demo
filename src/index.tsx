import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/App';

export const app = <App />;

function renderApp() {
    createRoot(document.getElementById('app')).render(app);
}

renderApp();
