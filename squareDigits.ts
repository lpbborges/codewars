export class Kata {
  static squareDigits(num: number): number {
    let squaredNumbers = "";
    num.toString().split("").forEach(n => {
      const parsedN = parseInt(n);
      squaredNumbers += (parsedN * parsedN).toString();
    });

    return parseInt(squaredNumbers);
  }
}
