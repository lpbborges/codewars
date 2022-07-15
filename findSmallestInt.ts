export function findSmallestInt(args: number[]): number {
  let smallest = args[0];

  for (let value of args) {
    if (smallest > value) {
      smallest = value;
    }
  }

  return smallest;
}
