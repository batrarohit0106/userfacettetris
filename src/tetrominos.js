export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: {
    shape: [['I', 'I', 'I', 'I']],color: '180, 127, 30',
  },
  J: { shape: [['J', 'J', 'J','J']], color: '136, 195, 23' },
  L: {
    shape: [[ 'L', 'L', 'L', 'L']],color: '23, 73, 136',
  },
  O: { shape: [['O', 'O','O', 'O']], color: '200, 130, 136' },
  S: { shape: [['S', 'S' ,'S', 'S']], color: '348, 311, 156' },
  T: {
    shape:  [['T', 'T', 'T', 'T']],color: '332, 161, 278',
  },
  Z: { shape: [['Z', 'Z','Z', 'Z']], color: '27, 80, 148' },
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
