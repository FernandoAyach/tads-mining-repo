export function min(list: number[]): number {
  if (list.length == 0) return NaN;
  return Math.min(...list);
}

export function max(list: number[]): number {
  if (list.length == 0) return NaN;
  return Math.max(...list);
}

export function avg(list: number[]): number {
  const sum = list.reduce((sum: number, value: number) => sum + value, 0);
  return sum / list.length;
}

export function median(list: number[]): number {
  if (list.length === 0) return NaN;

  const sorted = list.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }

  return sorted[mid];
}

export function std(list: number[]): number {
  if (list.length === 0) return NaN;

  const listAvg = avg(list);
  const sum =
    list.reduce(
      (std: number, value: number) => std + (value - listAvg) ** 2,
      0
    ) / list.length;
    
  return Math.sqrt(sum);
}
