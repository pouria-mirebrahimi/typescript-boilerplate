import { ProductA, isShipped } from '../src';

describe('test', () => {
  it('tests a product shipping status', () => {
    const product: ProductA = ['red', 'digital', 25];
    expect(isShipped(true, ...product)).toBe(true);
  });
});
