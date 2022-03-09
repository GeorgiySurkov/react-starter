import React from 'react';

import { Home } from './Home';

import { root } from 'effector-root';
import { attachLogger } from 'effector-logger/attach';

attachLogger(root);

import './App.css';

const App: React.FC = () => <Home />;

export default App;
