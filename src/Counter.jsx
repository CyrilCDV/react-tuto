import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

const Counter = (props) => {
  const item = "Book";
  const count = 0;

  const onClickMinus = () => {
    console.log("Minus");
  };

  const onClickPlus = () => {
    console.log("Plus");
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
        <Button variant="outlined" onClick={onClickMinus} disabled={false}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={onClickPlus}>
          Increment
        </Button>
      </Card>
      {/*
      <Button variant="contained" onClick={onClickMinus} disabled={false}>
        Delete
      </Button>{" "}
      */}
    </Box>
  );
};

export default Counter;
