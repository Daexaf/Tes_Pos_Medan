let kalimat = "We Always Mekar";
let strArr = kalimat.toLowerCase().split("");

let result = strArr.reduce((chars, ch) => {
  if (!chars[ch]) {
    chars[ch] = 1;
  } else {
    chars[ch] += 1;
  }
  return chars;
}, []);

console.log("hasilnya adalah: ", result);
