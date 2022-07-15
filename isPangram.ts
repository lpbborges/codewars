export const isPangram = (phrase: string): boolean =>
  [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ].every(l => phrase.toLowerCase().includes(l));

console.log(
  "isPangram",
  isPangram("The quick brown fox jumps over the lazy dog.")
);
