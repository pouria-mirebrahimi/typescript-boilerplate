import { ShippingState } from './lib/shipping.enum';

export type ProductA = [color: string, category: string, price: number];
export type ProductB = [size: string, serial: string, price: number];

export type ShippingProduct<T extends unknown[]> = [
  shipped: ShippingState,
  ...product: T,
];

export function isShipped(
  shippingProduct: ShippingProduct<ProductA | ProductB>,
): boolean {
  const [shipped] = shippingProduct;
  return shipped === ShippingState.SHIPPED;
}
