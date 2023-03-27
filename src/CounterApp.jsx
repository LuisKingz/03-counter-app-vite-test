import { useState } from "react";
import PropTypes from "prop-types";


export const CounterApp = ({ number }) => {
  const [counter, setCounter] = useState(number);

  const handleAdd = () => {
    // console.log(event);
    setCounter(counter + 1 );
    // setCounter ((c) => c + 1)
  };

  const handleSubtract = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(number);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick= { handleAdd } >+1</button>
      <button onClick= { handleReset } >reset</button>
      <button onClick= { handleSubtract } >-1</button>
    </>
  );
};

CounterApp.propTypes = {
  number: PropTypes.number.isRequired,
};
