// getNumberPower.js
const getNumberPower = (x, n) => {
    if (typeof x !== 'number' || typeof n !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return Math.pow(x, n);
  };
  
  export default getNumberPower;
  