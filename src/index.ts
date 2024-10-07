import { ShippingState } from './lib/shipping.enum';

export type ProductA = [color: string, category: string, price: number];
export type ProductB = [size: string, serial: string, price: number];

export type ShippingProduct<T extends unknown[]> = [
  shipped: ShippingState,
  ...product: T,
];

// TODO - implement the function below to pass its tests
export function isShipped(): void {}
