export function duplicateCount(text: string): number {
  const distinctValues = [...new Set(text)];
  let count = 0;

  for (let i = 0; i <= distinctValues.length; i++) {
    const textWithLetterRemoved = text.toLowerCase().split("").filter(t => t !== distinctValues[i]);

    if ((text.length - textWithLetterRemoved.length) > 1) {
      count++;
    }
  }

  return count;
}
