export const sliceArray = (arr, start, end) => {
  return arr.slice(start, end);
};

export const randomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
