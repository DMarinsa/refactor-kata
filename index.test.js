const { tree } = require("./index");

describe('given a tree', () => {
  it('should convert the tree to string', () => {
    const expectedString = '((7 + ((3 - 2) x 5)) ÷ 6)';

    expect(expectedString).toEqual(tree.toString());
  })

  it('should calculate a result', () => {
    const result = tree.result();

    expect(result).toBe(2);
  })
})
