import { User } from './lib';

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
console.log(`Product is shippable: ${isShipped(true, ...product)}`);

const customer = new User('Tom Cruise', 'tom@cruise.com', 'Generic');
customer.addressLine1 = '103, New Avenue';
customer.addressLine2 = 'Redhat, Istanbul';
customer.country = 'Turkey';

const address = customer.address();
console.log(address);
