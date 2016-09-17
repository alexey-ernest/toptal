
/**
 * Finds a way from (x,y) to (x1,y1) for a chess knight if it exists.
 *
 * @param      {Number}  width   Width of the board.
 * @param      {Number}  height  Height of the board.
 * @param      {Number}  x       Initial postion x coordinate.
 * @param      {Number}  y       Initial position y coordinate.
 * @param      {Number}  x1      Target position x coordinate.
 * @param      {Number}  y1      Target position y coordinate.
 * @param      {Number}  s       Current number of steps from the initial position.
 */
function go(width, height, x, y, x1, y1, board, s) {
  // checking inputs
  if ((x < 0 || x >= width) ||
      (y < 0 || y >= height) ||
      (x1 < 0 || x1 >= width) ||
      (y1 < 0 || y1 >= height)) {
    throw new Error('Invalid inputs');
  }

  var i,j;
  if (typeof board === 'undefined') {
    // init board
    board = [];
    for (i = width; i--; ) {
      board[i] = [];
      for (j = height; j--; ) {
        board[i][j] = 0;
      }
    }
  }
  
  if (typeof s === 'undefined') {
    // init step
    s = 1;
  }

  if (x === x1 && y === y1) {
    // path is found
    return [[x, y]];
  }
  // making a step in different directions
  var directions = [2, 1, -1, -2],
      len = directions.length,
      xx, yy,
      paths = [];
  for (i = len; i--;) {
    for (j = len; j--;) {
      // filtering incompatible directions: (1,1), (2,2), (-1, 2), etc.
      if (Math.abs(directions[i] * directions[j]) !== 2) {
        continue;
      }

      // checking bounds
      xx = x + directions[i];
      yy = y + directions[j];
      if ((xx < 0 || xx >= width) ||
          (yy < 0 || yy >= height)) {
        continue;
      }
      
      // marking board cell if not marked
      if (!board[xx][yy]) {
        board[xx][yy] = s;
        paths.push([xx, yy]);
      }
    }
  }

  // going to neighbor cells
  len = paths.length;
  var path;
  for (i = len; i--;) {
    path = go(width, height, paths[i][0], paths[i][1], x1, y1, board, s+1);
    if (path.length) {
      return [[x,y]].concat(path);
    }
  }

  return [];
}

module.exports = go;