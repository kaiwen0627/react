import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './Main';
import Child from './Child';
import Boxin from './boxIN';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <Header/>
        <div ClassName='App'>
          <Main id='55'>
            {(files) => files
              ? <Child files={files}></Child>
              : <div>等待中。。。。。。。。</div>}
          </Main>

        </div>

        <Boxin username='kaiwen'></Boxin>
      </div>

    );
  }
}

export default App;
