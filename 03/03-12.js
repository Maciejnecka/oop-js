const checker = {
  // color: 'white',
  player: 'Anna',
  moves: [],
};

Object.defineProperty(checker, 'color', {
  value: 'white',
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(checker);
