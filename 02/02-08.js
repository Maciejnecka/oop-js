// proceduralnie
const checker1 = {
  color: 'white',
  player: 'mateusz',
  moves: [],
};

function move(checker, from, to) {
  checker.moves.push(`${from}-${to}`);
}

move(checker1, '61', '52');

// obiektowo
function Checker(color, player) {
  this.color = color;
  this.player = player;
  this.moves = [];

  this.move = function (from, to) {
    this.moves.push(`${from}-${to}`);
  };
}

const checker2 = new Checker('white', 'mateusz');
checker2.move('61', '52');

console.log(checker1, checker2);
