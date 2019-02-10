import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import CardsDashboard from './Card/CardsDashboard';
import { AppOne } from './Bem/BemOne';
import { AppTwo } from './Bem/BemTwo';
import { AppThree } from './Bem/BemThree';
import { AppComplete } from './Bem/BemComplete';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>컨텐츠</h3>
        <ul>
          <li>Todo React App을 만들면서 React Component를 쪼개고 개발 순서를 연습해보자.</li>
          <li>
            BEM 패턴을 이용해서 CSS 이름을 정하고 SCSS로 CSS Scope을 표현해보자.
          </li>
        </ul>

        <BrowserRouter>
          <div>
            <h3>예제</h3>
            <ul>
              <li><Link to="/">ToDo App</Link></li>
              <li><Link to="/bem/complete">Completed</Link></li>
              <li><Link to="/bem/1">STEP1</Link></li>
              <li><Link to="/bem/2">STEP2</Link></li>
              <li><Link to="/bem/3">STEP3</Link></li>
            </ul>
            <hr />

            <Route exact path="/" component={CardsDashboard} />
            <Route path="/bem/complete" component={AppComplete} />
            <Route path="/bem/1" component={AppOne} />
            <Route path="/bem/2" component={AppTwo} />
            <Route path="/bem/3" component={AppThree} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
