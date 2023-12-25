import React from 'react';
import ReactDOM from 'react-dom/client';
import { CvPage } from './cvPage';
import './global.scss';

function main() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <CvPage />
    </React.StrictMode>,
  );
}

main();
