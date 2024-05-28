import { useState } from 'react';
import './App.css'
import styled from "styled-components";


const Container = styled.div`
  margin: 200px auto;
  text-align: center;
`;
const Count = styled.div`
  font-size: 200px;
`;
const Btn = styled.button`
  font-size: 50px;
  margin: 10px;
  width: 80px;
`;


function App() {
  const [count, setCount] = useState(0);

  const addCountHandler = () => {
    setCount(count + 1);
  }

  const minusCountHandler = () => {
    setCount(count - 1);
  }

  const resetCountHandler = () => {
    setCount(0);
  }
  return (
    <Container>
      <Count>{count}</Count>
      <Btn onClick={addCountHandler}>+</Btn>
      <Btn onClick={minusCountHandler}>-</Btn>
      <Btn style={{width: "150px"}} onClick={resetCountHandler}>reset</Btn>
    </Container>
  );
}

export default App
