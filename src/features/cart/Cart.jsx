import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Flexbox from '../../components/Flexbox/Flexbox';
import {
  decrement,
  increment,
  selectItems,
} from './cartSlice';
import {
  Cart, ItemName, Total, ItemPrice, Value, Button,
} from './styles';

export default function CartComponent() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  return (
    <>
      {items.length ? (
        <Cart>
          {
        items.map((item) => (
          <Flexbox>
            <Flexbox direction="column">
              <ItemName>{item.name}</ItemName>
              <Total>
                <ItemPrice>
                  $
                  {item.totalPrice || item.price}
                </ItemPrice>
              </Total>
            </Flexbox>
            <Flexbox>
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
            </Flexbox>
          </Flexbox>
        ))
      }
        </Cart>
      ) : null}
    </>
  );
}
