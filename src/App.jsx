

import Header from './components/Header/Header.jsx';
import { EXAMPLES } from './data.js';
import { CoreConcepts } from './components/CoreConcepts.jsx';
import { Examples } from './components/Examples.jsx';

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
