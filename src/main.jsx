import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './CSS/index.css';
import { previewMode } from './services/preview';

if (!previewMode) {
  const script = document.createElement('script');
  script.src = '/account.js';
  document.head.append(script);
}
createRoot(document.getElementById('root')).render(
  <HashRouter><App /></HashRouter>
);
