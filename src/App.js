import React from 'react';
import Header from "./header/header";
import {GlobalStyle} from './statics/iconfont/iconfont';
import {GlobalStyle2} from './style';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <GlobalStyle2/>
      <Header />
    </div>
  );
}

export default App;
