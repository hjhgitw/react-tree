import './App.css';

import Tree from './Tree';

import { DATA } from './constants';

function App() {
  return (
    <div className="App">
      <Tree data={DATA} />
    </div>
  );
}

export default App;
