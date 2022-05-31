import React from "react";
import { playRNN } from "../data/compose.js";


class Showing extends React.Component {
    handleClick() {
      playRNN();
    }
  
    render() {
      // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }



export default Showing;