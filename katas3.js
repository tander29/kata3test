const sampleArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472
];
const twenty = Array.from(Array(20), (e, i) => i + 1);
const hundred = Array.from(Array(100), (e, i) => i + 1);
// create new reverse arrays so we do not mutate original by calling .reverse()
const twentyReversed = Array.from(Array(20), (e, i) => i + 1).reverse();
const hundredReversed = Array.from(Array(100), (e, i) => i + 1).reverse();
// instructions need this to be in an html element,
// not console log, will have to brainstorm on that

function kata1() {
  return twenty;
}
const kata2 = () => {
  return twenty.filter(x => x % 2 === 0);
},
const kata3 = () => {
  return twenty.filter(x => x % 2 !== 0);
},
const kata4 = () => {
  return hundred.filter(x => x % 5 === 0);
},
const kata5 = () => {
  return hundred.filter(x => Number.isInteger(Math.sqrt(x)));
},

const kata6 = () => {
  return twentyReversed;
},
const kata7 = () => {
  return twentyReversed.filter(x => x % 2 === 0);
},
const kata8 = () => {
  return twentyReversed.filter(x => x % 2 !== 0);
},

const kata9 = () => {
  return hundredReversed.filter(x => x % 5 === 0);
},
const kata10 = () => {
  return hundredReversed.filter(x => Number.isInteger(Math.sqrt(x)));
},
const kata11 = () => {
  return sampleArray;
},
const kata12 = () => {
  return sampleArray.filter(number => number % 2 === 0);
},
const kata13 = () => {
  return sampleArray.filter(number => number % 2 !== 0);
},
const kata14 = () => {
  return sampleArray.map(x => x * x);
},
const kata15 = () => {
  const sum = (total, num) => total + num;
  let N = 21;
  let a = Array.apply(null, { length: N }).map(Number.call, Number);
  return a.reduce(sum);
}
const kata16 = () => {
  const sum = (total, num) => total + num;
  return ;
},
const kata17 = () => {
  return 20;
},
const kata18 = () => {
  return 940;
}
const kata19 = () => {
  return 1;
}
const kata21 = () => {
  return 1;
}
const kata22 = () => {
  return 1;
}
const kata23 = () => {
  return 1;
}