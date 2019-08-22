describe("the multiplyArray function", function() {
  it("should be a function", function() {
    expect(typeof multiplyArray).toBe("function");
  });

  it("should only take one array parameter", function() {
    expect(multiplyArray.length).toBe(1);

    expect(function() {
      multiplyArray(1);
    }).toThrow(new Error("Could not compute the sum: not an array"));
  });

  it("should return 0 for an empty array", function() {
    expect(multiplyArray([])).toBe(0);
  });
});

describe("the sumArray function", function() {
  it("should be a function", function() {
    expect(typeof sumArray).toBe("function");
  });

  it("should return 0 for an empty array", function() {
    expect(sumArray([])).toBe(0);
  });

  it("should return a number", function() {
    const testArrays = [[1, 2, 3], [-5, 10, 3], [1, 2, 3, 4, 5, 6]];
    testArrays.forEach(arr => {
      expect(typeof sumArray(arr)).toBe("number");
    });

    // expect(typeof sumArray([1, 2, 3])).toBe("number");
    // expect(typeof sumArray([-5, 10, 3])).toBe("number");
    // expect(typeof sumArray([1, 2, 3, 4, 5, 6])).toBe("number");
  });

  it("should only take one array parameter", function() {
    expect(sumArray.length).toBe(1);

    expect(function() {
      sumArray(1);
    }).toThrow(new Error("Could not compute the sum: not an array"));
  });

  it("should return the correct sum", function() {
    expect(sumArray([1])).toBe(1);
    expect(sumArray([0, 1, 2])).toBe(3);
    expect(sumArray([-5, 10, 5, 6])).toBe(16);
  });

  it("is a random test", function() {
    //   compares objects or primitives and passes if they are equivalent
    expect([]).toEqual([]);
    const arr = [];

    // compares objects or primitives and passes if they are === (same object or same value for primitives)
    expect(arr).toBe(arr);
  });
});
