import { addTwo } from '@jacobtipp/monorepo-release-demo-a';

console.log('test');

export const addThree = (numm: number) => addTwo(numm) + 1;
