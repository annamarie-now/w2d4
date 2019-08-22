function multiplyArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Could not compute the sum: not an array");
  }

  if (numbers.length === 0) {
    return 0;
  }
}

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Could not compute the sum: not an array");
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
