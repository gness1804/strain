export function keep<T>(arr: Array<T>, predicate: (x: T) => boolean): Array<T> {
  return arr.reduce((acc: Array<T>, curr: T) => {
    if (predicate(curr)) acc.push(curr);
    return acc;
  }, [])
}

export function discard<T>() {
  throw new Error('Remove this statement and implement this function')
}
