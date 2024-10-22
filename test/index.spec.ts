import { ProductA, ProductB, ShippingProduct, isShipped } from '../src';
import { ShippingState } from '../src/lib/shipping.enum';

describe('testing shipping status of products', () => {
  it('should be a shipped product', () => {
    const product: ProductA = ['RED', 'digital', 24];
    const shippingProduct: ShippingProduct<ProductA> = [
      ShippingState.SHIPPED,
      ...product,
    ];

    expect(isShipped(shippingProduct)).toBe(true);
  });

  it('it should not be a shipped product', () => {
    const product: ProductB = ['xs', '231AX6T', 16.5];
    const shippingProduct: ShippingProduct<ProductB> = [
      ShippingState.NOT_SHIPPED,
      ...product,
    ];

    expect(isShipped(shippingProduct)).toBe(false);
  });
});
