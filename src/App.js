import React from 'react';
import Header from "./common/header/header";
import { GlobalStyle } from './statics/iconfont/iconfont';
import { GlobalStyle2 } from './style';
import store from './store';
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <GlobalStyle2 />
        <Header />
      </div>

    </Provider>
  );
}

export default App;
