const Node = (operator, value, left, right) => {
  const result = function () {
    if (this.operator === '+') {
      return left.result() + right.result();
    }

    if (this.operator === '-') {
      return left.result() - right.result();
    }

    if (this.operator === 'x') {
      return left.result() * right.result();
    }

    if (this.operator === '÷') {
      const leftResult = left.result();
      const rightResult = right.result();
      if (rightResult === 0) {
        throw new Error('Cannot divide by zero');
      }
      return leftResult / rightResult;
    }

    if (typeof value !== 'number') {
      throw new Error('value must be a number or Node');
    }

    return value;
  };

  const toString = function () {

    if (this.operator) {
      return `(${left.toString()} ${this.operator} ${right.toString()})`
    }

    return value.toString();
  };

  return {
    operator,
    value,
    left,
    right,
    result,
    toString
  };
};

const number5Node = Node("", 5, null, null);
const number2Node = Node("", 2, null, null);
const number3Node = Node("", 3, null, null);
const number7Node = Node("", 7, null, null);
const number6Node = Node("", 6, null, null);
const innerNode = Node("-", null, number3Node, number2Node);
const multipliedNode = Node("x", null, innerNode, number5Node);
const add7ToMultipliedNode = Node("+", null, number7Node, multipliedNode)

const tree = Node(
  "÷",
  null,
  add7ToMultipliedNode,
  number6Node
);

module.exports = {
  tree,
  Node,
}
