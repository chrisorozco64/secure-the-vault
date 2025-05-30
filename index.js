let code1;
code1 = 7 + 3;
let code2 = 120 / 2 - 20;
let code3 = 38 + (13 % 3);
let message = "The vault has been secured. The combination is:";
let codeA = code1 + "-" + code2 + "-" + code3;
let codeB = `${code1}-${code2}-${code3}`;
console.log(
  `${message} using concatenation ${codeA} using string template ${codeB}`
);
