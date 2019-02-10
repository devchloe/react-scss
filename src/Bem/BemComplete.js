import React from 'react';

import './scope-with-bem.scss';

export const AppComplete = () => (
  <div>
    <div className="textColor">
      <div className="boundary">hello</div></div>
    <h2>완성</h2>
    <div className="component">
      <div className="component__child-element"></div>
    </div>

    <div className="component">
      <div className="component__child-element component__child-element--yellow"></div>
    </div>

    <div className="component component--reversed">
      <div className="component__child-element"></div>
    </div>
  </div>
);
