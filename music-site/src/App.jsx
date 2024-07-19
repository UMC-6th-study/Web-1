import "./App.css";
import { styled } from "styled-components";
import { CartIcon } from "./components/icons";
import MusicItem from "./components/musicItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "./redux/cartSlice";
import { calculateTotals } from "./redux/cartSlice";
import { useEffect } from "react";

function App() {
  const cartItems = useSelector((state) => {
    return state.cartItemAmount.cartItems;
  });
  const totalPrice = useSelector((state) => {
    return state.cartItemAmount.totalPrice;
  });
  const totalCount = useSelector((state) => {
    return state.cartItemAmount.totalCount;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Header>
        <h1>UMC playlist</h1>
        <div id="cart-icon">
          {CartIcon()}
          <span>{totalCount}</span>
        </div>
      </Header>

      <Container>
        {/* musicList */}
        <div className="title">
          <h1>당신이 선택한 음반</h1>
        </div>
        <div className="items">
          {cartItems &&
            cartItems.map((e, key) => {
              return <MusicItem props={e} key={key} />;
            })}
        </div>

        <div>
          <button onClick={() => dispatch(clearItem())}>장바구니 초기화</button>
          <span>총 가격: {totalPrice}</span>
        </div>
      </Container>
    </>
  );
}

const Header = styled.header`
  background-color: #26b2ddce;
  width: 100vw;
  /* height: 50px; */
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 20%;

  font-size: 9px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  #cart-icon {
    box-sizing: border-box;
    width: 30px;
    height: 30px;
  }
`;

const Container = styled.div`
  .title {
    margin: 0 auto;
    width: 500px;
  }

  .items {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  /* width: 100vw; */
  /* margin: 0 auto; */
  padding-top: 50px;
  box-sizing: border-box;
`;

export default App;
