import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectItems,
} from './cartSlice';
import {
  Cart, ItemName, Total, ItemPrice, Button, Value,
} from './styles';

export default function CartComponent() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  return (
    <Cart>
      {
        items.map((item) => (
          <>
            <ItemName>{item.name}</ItemName>
            <Total>
              <ItemPrice>
                $
                {item.totalPrice || item.price}
              </ItemPrice>
            </Total>
            <Button
              type="button"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement(item))}
            >
              -
            </Button>
            <Value>{item.amount}</Value>
            <Button
              type="button"
              aria-label="Increment value"
              onClick={() => dispatch(increment(item))}
            >
              +
            </Button>
          </>
        ))
      }
    </Cart>
  );
}
