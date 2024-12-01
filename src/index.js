import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import Stopwatch from './Components/Stopwatch';
// import Stopw from './Components/Stopw';
// import Form from './Components/form';
// import App from './App';
// import Counter ,{Visibletext} from './Components/Counter';
// import { Input , Toggle, } from './Components/Input';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <App/>
  <Counter/>
  <Input/>
  <Toggle/>
  <Visibletext/> 
  <Form/> 
 <Stopwatch />
 <Stopw /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
