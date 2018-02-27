module.exports = function solveEquation(equation) {
  equation = equation.replace(/ /g,'');
  var reg = equation.match(/-?\d+/g);
  var a = reg[0];
  var b = reg[2];
  var c = reg[3];
  var d = Math.pow(b, 2) - 4 * a * c;

  var dr = Math.sqrt(d);
  var x1 = Math.ceil((-b + dr) / (2 * a));
  var x2 = Math.ceil((-b - dr) / (2 * a));

  var solutions;

  if (x1 > x2) {
    solutions = [x2, x1];
  }
  else {
    solutions = [x1, x2];
  };

  return solutions;
}
