import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import { CvPage } from './cvPage';

function main() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <CvPage />
    </React.StrictMode>,
  );
}

main();
