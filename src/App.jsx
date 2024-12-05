
// App.jsx
import Grid from './Grid';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dynamic Grid</h1>
      <Grid numRows={2} numCols={4} />
    </div>
  );
}

export default App;
