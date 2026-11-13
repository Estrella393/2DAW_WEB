const nums = [10, 20, 30, 40];

console.log(nums.slice(-1));
console.log(nums.slice(-3));

console.log(nums);
//copiar y luego hacer otro con =

//copia con .slice
const copia = nums.slice();
copia.push(50);
console.log(copia); //en la misma linea push y log nop va
console.log(nums);

//copia sin slice
const copia2 = nums;
copia2.push(50);
console.log(copia2);
console.log(nums);
