export type ProductA = [color: string, category: string, price: number];
export type ProductB = [size: string, serial: string, price: number];
export type Shipping<T extends any[]> = [shipped: boolean, ...product: T];

export function isShipped(
  ...shippingProduct: Shipping<ProductA | ProductB>
): boolean {
  const [shipped] = shippingProduct;
  return shipped;
}

const product: ProductA = ['red', 'digital', 24];
console.log(isShipped(true, ...product));
