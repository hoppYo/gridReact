

// utils.js
export const range = (start, end, step = 1) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  let output = [];
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

// Examples
console.log(range(5)); 
console.log(range(2, 8)); 
console.log(range(0, 10, 2)); 
