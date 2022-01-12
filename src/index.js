import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Basket from './pages/Basket'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BasketProvider } from './utils/context/basket'
import { PageSizeProvider } from './utils/context/pageSize'
import { PageNumberProvider } from './utils/context/pageNumber'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <BasketProvider>
        <PageSizeProvider>
          <PageNumberProvider>
            <Routes>
                <Route exact path={'/'} element={<App/>} />
                <Route exact path={'/basket'} element={<Basket/>} />
            </Routes>
          </PageNumberProvider>
        </PageSizeProvider>
      </BasketProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
