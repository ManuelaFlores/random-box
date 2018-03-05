import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    function randomColor() {
      const character = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ];
      let code = "";
      for (let i = 0; i < 6; i++) {
        let temp = character[Math.floor(Math.random() * character.length)];
        code += temp;
      };
      return "#" + code;
    }

    function randomPosition(maxNumber) {
      return Math.floor(Math.random() * maxNumber);
    }

    function randomFont() {
      const fonts = [
        "font1",
        "font2",
        "font3",
        "font4",
        "font5",
        "font6",
        "font7"
      ];
      return fonts[randomPosition(fonts.length)];
    }

    function randomText() {
      const obj = [
        {
          text:
            "El verdadero viaje del descubrimiento no consiste en explorar nuevos territorios sino en explorar con nuevos ojos."
        },
        {
          text:
            "La gota de agua perfora la roca, no por su fuerza sino por su constancia."
        },
        {
          text:
            "Nunca olvides que los grandes logros requieren tiempo y paciencia."
        },
        {
          text:
            "A la cima no se llega superando a los demás sino superándose a sí mismo."
        }
      ];
      return obj[randomPosition(obj.length)].text;
    };

    let color= {backgroundColor: randomColor()};
    let font = randomFont();
    let text = randomText();

    return (
      <div className="size flex-container">
        <div className="box-styles h-auto" style={color}>
          <p className={font} id="text-styles">
            {text}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
