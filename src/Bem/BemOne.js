import React from 'react';

import './scope-with-bem-1.scss';

export const AppOne = () => (
  <div>
    <h2>STEP1. 하나의 컴포넌트를 재사용하여 두 번 렌더링 (사각형은 보라색, 원은 흰색으로)</h2>
    <div className="component">
      <h3>Source</h3>
      <div className="component__child-element"></div>
    </div>

    <div className="component">
      <h3>Target</h3>
      <div className="component__child-element"></div>
    </div>
  </div>
);
