import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Flexbox from '../../components/Flexbox/Flexbox';
import {
  decrement,
  increment,
  selectCartTotal,
  selectItems,
} from './cartSlice';

import {
  Cart, ItemName, Total, ItemPrice, Value, StyledButton, StyledFlexbox, CartTotal,
} from './styles';

export default function CartComponent() {
  const items = useSelector(selectItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <>
      <Cart className={items.length && 'is-visible'}>
        {
        items.map((item) => (
          <StyledFlexbox>
            <Flexbox direction="column">
              <ItemName>{item.name}</ItemName>
              <Total>
                <ItemPrice>
                  $
                  {item.totalPrice || item.price}
                </ItemPrice>
              </Total>
            </Flexbox>
            <Flexbox alignCenter>
              <StyledButton
                type="button"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement(item))}
              >
                -
              </StyledButton>
              <Value>{item.amount}</Value>
              <StyledButton
                type="button"
                aria-label="Increment value"
                onClick={() => dispatch(increment(item))}
              >
                +
              </StyledButton>
            </Flexbox>
          </StyledFlexbox>
        ))
      }
        <CartTotal>
          <span>
            $
            {cartTotal}
          </span>
        </CartTotal>
      </Cart>
    </>
  );
}
