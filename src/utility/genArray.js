const genArray = (val) => {
  return Array.from({ length: 10 }, (_, i) => i + 1 + val);
};
export default genArray;
