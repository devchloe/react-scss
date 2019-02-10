import React from 'react';

import './scope-with-bem-2.scss';

export const AppTwo = () => (
  <div>
    <h2>STEP2. child-element만 상태가 변하는 경우 (사각형은 유지, 원은 노란색으로)</h2>
    <div className="component">
      <h3>Source</h3>
      <div className="component__child-element"></div>
    </div>

    <div className="component">
      <h3>Target</h3>
      <div className="component__child-element component__child-element--yellow"></div>
    </div>
  </div>
);
