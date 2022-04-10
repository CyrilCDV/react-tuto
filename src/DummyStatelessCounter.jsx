import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useState } from "react";

const StatefulCounter = (props) => {
  const item = "Book";
  const [count, setCount] = useState(0);

  const onClickMinus = () => {
    console.log("Minus");
    setCount((count) => count - 1);
  };

  const onClickPlus = () => {
    console.log("Plus");
    setCount((count) => count + 1);
  };

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
