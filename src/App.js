import React from 'react';
import Header from "./common/header/header";
import { GlobalStyle } from './statics/iconfont/iconfont';
import { GlobalStyle2 } from './style';
import store from './store';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <GlobalStyle2 />
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </div>

    </Provider>
  );
}

export default App;
