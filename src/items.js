const items = ["Book", "Car", "House", "Computer"];

let index = 0;

const getNextItem = () => {
  const item = items[index];
  index = (index + 1) % items.length;
  return item;
};
