function getClosingParen(sentence, openingParenIndex) {
  // Find the position of the matching closing parenthesis
  let open = [];
  let arr = [];
  let opIndex = undefined;
  sentence.split("").map((el, i) => {
    if (el === "(" || el === ")") {
      if (el === "(") {
        open.push(i);
      } else {
        opIndex = open.splice(open.length - 1, 1)[0];
        arr = [...arr, [opIndex, i]];
      }
    }
  });

  let num = arr.filter(array => array[0] === openingParenIndex)[0][1];

  if (!num) {
    throw new Error("No closing parenthesis :(");
  } else {
    return num;
  }
}
