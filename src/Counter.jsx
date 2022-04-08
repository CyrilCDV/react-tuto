import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
    <>
      <Button variant="outlined" onClick={onClickMinus} disabled={false}>
        -
      </Button>
      <Box variant="outlined">{`${item}: ${count}`}</Box>
      <Button variant="outlined" onClick={onClickPlus}>
        +
      </Button>
    </>
  );
};

export default Counter;
