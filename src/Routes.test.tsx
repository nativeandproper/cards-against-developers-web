import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Component
import Routes from './Routes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routes />, div);
});
