import React from 'react';

import './scope-with-bem-3.scss';

export const AppThree = () => (
  <div>
    <h2>STEP3. component와 child-element의 상태가 모두 변하는 경우 (사각형은 흰색, 원은 보라색으로)</h2>
    <div className="component">
      <h3>Source</h3>
      <div className="component__child-element"></div>
    </div>

    <div className="component component--reversed">
      <h3>Target</h3>
      <div className="component__child-element"></div>
    </div>
  </div>
);
