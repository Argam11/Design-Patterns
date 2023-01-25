const data = (function () {
  const count = 0;

  return {
    getCount: () => {
      return count;
    },
    increaseCount: () => {
      return count++;
    },
    decreaseCount: () => {
      return count--;
    },
  };
})();

console.log(data.getCount());
