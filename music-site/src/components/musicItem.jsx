import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import {
  calculateTotals,
  decrease,
  increase,
  removeItem,
} from "../redux/cartSlice";
import { useSelector } from "react-redux";

export default function MusicItem({ props }) {
  let { id, title, singer, price, img, amount } = props;

  const dispatch = useDispatch();

  //   const totalPrice = useSelector((state) => state.cartItemAmount.total);
  //   console.log(totalPrice);

  return (
    <ItemWrapper>
      <div className="music-info">
        <img src={img} />

        <div className="detail">
          <span>{title} | </span>
          <span>{singer}</span>
          <p>{price}</p>
        </div>
      </div>
      <div className="count">
        <button
          onClick={() => {
            if (--amount < 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          -
        </button>
        {amount}
        <button
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          +
        </button>
      </div>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;

  flex: 1 1 0;

  .music-info {
    display: flex;
    /* background-color: white; */
  }
  img {
    height: 50px;
    width: 50px;
  }
`;
