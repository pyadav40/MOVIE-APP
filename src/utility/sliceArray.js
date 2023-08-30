export const sliceArray = (arr, start, end) => {
  return arr.slice(start, end);
};

export const randomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const findGenres = (arr) => {
  let joinArr = [];
  for (let item of arr) {
    joinArr.push(item.name);
  }
  return joinArr.join(", ");
};

export const pageArray = (pages) => {
  return Array.from({ length: pages }, (_, i) => i + 1);
};
