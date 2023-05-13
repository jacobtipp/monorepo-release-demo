import { addTwo } from '@jacobtipp/monorepo-release-demo-a';

console.log(addTwo);
console.log('test');

export const addThree = (num: number) => addTwo(num) + 1;
