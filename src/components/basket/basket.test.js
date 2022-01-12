import functions from './functions'
const item = {name: "apple", description: "red and delicious"};
let basket = [{name: "orange", description: "crazy and round"}];
describe('Basket component', () => {
 it('should add an item to a basket array', () => {
  expect(functions.addItem(item, basket)).toEqual([{name: "orange", description: "crazy and round"}, {name: "apple", description: "red and delicious"}]);
 });

 it('should remove an item from basket array', () => {
  basket = functions.addItem(item, basket);
  expect(functions.removeItem(item, basket)).toEqual(basket)
 });

 it('should always return an array', () => {
    expect(typeof functions.addItem(item, basket)).toBe(typeof basket);
    expect(typeof functions.removeItem(item, basket)).toBe(typeof basket);
 });
})