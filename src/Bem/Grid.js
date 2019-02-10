import React from 'react';

import './Grid.scss';
import MdAdd from 'react-icons/lib/md/add';

export const Grid = () => (
  <div>
    <h2>Button</h2>
    <button className="circle-button" type="button"><MdAdd /></button>
    <div className="component">
      <h3>Target</h3>
      <div className="component__child-element"></div>
    </div>
  </div>
);
