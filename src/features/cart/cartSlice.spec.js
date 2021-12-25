import cartReducer, {
  addToCart,
  decrement,
  increment,
  selectCartTotal,
} from './cartSlice';

describe('cart reducer', () => {
  const initialState = {
    list: [],
  };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual({
      list: [],
    });
  });

  it('should handle addToCart', () => {
    const actual = cartReducer(initialState, addToCart({ slug: 'test', price: 10 }));

    expect(actual.list).toEqual([{ slug: 'test', totalPrice: 10, price: 10, amount: 1 }]);
  });

  it('should handle increment', () => {
    const actual = cartReducer(initialState, addToCart({ slug: 'test', price: 10 }));

    expect(actual.list).toEqual([{ slug: 'test', totalPrice: 10, price: 10, amount: 1 }]);

    const newState = cartReducer(actual, increment({ slug: 'test', price: 10 }));
    expect(newState.list).toEqual([{ slug: 'test', totalPrice: 20, price: 10, amount: 2 }]);
  });

  it('should handle decrement', () => {
    const actual = cartReducer(initialState, addToCart({ slug: 'test', price: 10 }));
    expect(actual.list).toEqual([{ slug: 'test', totalPrice: 10, price: 10, amount: 1 }]);

    const newState = cartReducer(actual, decrement({ slug: 'test', price: 10 }));
    expect(newState.list).toEqual([]);
  });

  test('should handle selectCartTotal', () => {
    const result = selectCartTotal({ cart: { list: [{ slug: 'test', totalPrice: 30, amount: 3 }, { slug: 'test2', totalPrice: 30 }] } });

    expect(result).toEqual('60.00');
  });
});
