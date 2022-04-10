import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { getNextItem } from "./items";

const DummyStatefulCounter = () => {
  console.log("Rendering DummyCounter");

  const item = "Book"; // TODO Load item using result from getNextItem request
  const count = 0; // TODO Manage count state and impact of increment and decrement

  const onClickMinus = () => {
    console.log("Decrement");
  };

  const onClickPlus = () => {
    console.log("Increment");
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
        <Button variant="outlined" onClick={onClickMinus} disabled={false}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={onClickPlus}>
          Increment
        </Button>
      </Card>
    </Box>
  );
};

export default DummyStatefulCounter;
