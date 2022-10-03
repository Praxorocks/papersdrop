import Inner from './Inner'
import Text from './Text'
import './App.css';

function App() {
  return (
    <div className="outerbox">
      <div className="number">
        <Text title="45 comments" />
      </div>
      <Inner />
    </div>
  );
}

export default App;
