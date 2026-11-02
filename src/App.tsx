import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';

// The app brings the two example components together on one page.
function App() {
  return (
    <main className="app">
      <h1>React with TypeScript</h1>
      <Greeting name="Alex" />
      <Counter />
    </main>
  );
}

export default App;
