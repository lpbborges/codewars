export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.some(n => n === x)
} 
