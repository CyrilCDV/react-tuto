import { useEffect } from "react";
import { getItems } from "./items";

const DummyConstantBasket = () => {
  console.log("Rendering DummyConstantBasket");
  const items = [];

  useEffect(() => {
    getItems().then((newItems) => {
      // Update items from newItems
      // Initialize count for each item
    });
  }, []);
  console.log(items);

  return <>{items.map}</>;
};

export default DummyConstantBasket;
