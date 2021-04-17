import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();

var date = new Date();
var hours = date.getHours();
if (hours > 8 && hours <= 16) {
  import("./Day.css");
}
else if (hours > 4 && hours <= 8) {
  import("./Sunrise.css");
}
else if (hours > 16 && hours <= 20) {
  import("./Sunrise.css");
}
else {
  import("./Night.css");
}