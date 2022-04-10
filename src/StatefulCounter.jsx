import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

import { getNextItem } from "./items";

const StatefulCounter = (props) => {
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    getNextItem().then((newItem) => {
      setItem(newItem);
    });
  }, []);

  const onClickMinus = () => {
    console.log("Minus");
    setCount((count) => count - 1);
  };

  const onClickPlus = () => {
    console.log("Plus");
    setCount((count) => count + 1);
  };

  if (!item) {
    return <CircularProgress />;
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px"
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px"
        }}
      >
        {`${item}: ${count}`}
        <Button variant="outlined" onClick={onClickMinus} disabled={count < 1}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={onClickPlus}>
          Increment
        </Button>
      </Card>
    </Box>
  );
};

export default StatefulCounter;
