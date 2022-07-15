export function sumArray(array: number[] | null): number {
  if (!array || array.length < 1) return 0;

  return array.sort().slice(1, -1).reduce((p, n) => p + n, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
