const items = ["Book", "Car", "House", "Computer"];

let index = 0;

export const getNextItem = () => {
  const item = items[index];
  console.log(item);
  index = (index + 1) % items.length;
  return new Promise((resolve) => {
    setTimeout(() => resolve(item), 3000);
  });
};
