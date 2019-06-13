// on array : avg

const myarray = [22,9,60,12,4,56]
const sum = (x,y) => x+y;
const avg = myarray => myarray.reduce(sum,0) / myarray.length
console.log(avg(myarray))//27.166666666666668