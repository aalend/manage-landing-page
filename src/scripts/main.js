const calcClamp = function (maxFontSize, minFontSize, maxWidth, minWidth) {
  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;
  const preferredValue = `${yAxisIntersection.toFixed(2)}rem + ${
    slope * 100
  }vw`;

  const clamp = `clamp(${minFontSize}rem, ${preferredValue}, ${maxFontSize}rem)`;

  console.log(clamp);
};

calcClamp(1, 0.8125, 69.375, 22.5);
