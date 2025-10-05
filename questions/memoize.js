function memoize(fn) {
  const cache = new Map();
  return function (...x) {
    console.log(cache);
    if (cache.has(x.toString())) {
      console.log("from cache");
      return cache.get(x.toString());
    }
    const res = fn(...x);
    cache.set(x.toString(), res);
    console.log("newly calculated");
    return res;
  };
}

function sum(a, b) {
  return a + b;
}

const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 2));
