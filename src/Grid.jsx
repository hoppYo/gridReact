

// Grid.jsx
import { range } from './utils';

const gridStyles = {
  display: 'grid',
  gap: '5px',
  gridTemplateRows: `repeat(auto-fill, 100px)`,
  gridTemplateColumns: `repeat(auto-fill, 100px)`,
};

const cellStyles = {
  width: '100px',
  height: '100px',
  border: '1px solid grey',
  borderRadius: '5px',
};

function Grid({ numRows, numCols }) {
  const gridCells = range(numRows * numCols).map((_, index) => (
    <div key={index} style={cellStyles}></div>
  ));

  return (
    <div
      style={{
        ...gridStyles,
        gridTemplateRows: `repeat(${numRows}, 100px)`,
        gridTemplateColumns: `repeat(${numCols}, 100px)`,
      }}
      className="grid"
    >
      {gridCells}
    </div>
  );
}

export default Grid;
