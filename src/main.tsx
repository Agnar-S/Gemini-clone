import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ContextProvider from './context/ContextProvider';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
