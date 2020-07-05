// global modules
import React from "react";
// styles
import "./color.scss";

const Colors = () => {
  var steps = [];

  for (var i = 1; i <= 32; i++) {
    const num = 8 * i;
    steps.push(num);
  }

  const shuffle = array => {
    var m = array.length,
      t,
      i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    const arraySlice = array.slice(0, 3);
    const rgbArray = {
      r: arraySlice[0],
      g: arraySlice[1],
      b: arraySlice[2]
    };
    return rgbArray;
  };

  var discreetColors = [];
  for (var i = 1; i <= 32768; i++) {
    const colors = shuffle(steps);
    discreetColors.push(colors);
  }

  return (
    <div className="color-wrapper">
      {discreetColors.map(item => (
        <div
          className="color"
          style={{ backgroundColor: `rgb(${item.r},${item.g}, ${item.b})` }}
        />
      ))}
    </div>
  );
};

export default Colors;
