module.exports = function solveEquation(equation) {
  var reg = equation.match(/\d/g);
  var a = reg[1];
  var b = reg[3];
  var c = reg[4];
  var d = Math.pow(b, 2) - 4 * a * c;

  var dr = Math.sqrt(d);
  var x1 = (-b + dr) / 2 * a;
  var x2 = (-b - dr) / 2 * a;

  const solutions = [x1, x2];

  return solutions;
}
