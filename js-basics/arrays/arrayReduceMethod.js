const array = [1,2,3];

const reduceFunc = (summ, current) => summ + current;

const sumwithoutinitialvalue = array.reduce(reduceFunc);

console.log(sumwithoutinitialvalue);