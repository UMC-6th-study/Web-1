import "./App.css";
import { styled } from "styled-components";
import { CartIcon } from "./components/icons";
import MusicItem from "./components/musicItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "./redux/cartSlice";
import { calculateTotals } from "./redux/cartSlice";
import { useEffect } from "react";
import { fetchGet } from "./redux/cartSlice";

function App() {
  const { cartItems, totalPrice, totalCount, status } = useSelector((state) => {
    return state.cartItemAmount;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGet());
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("http://localhost:8080/musics");
  //     const jsonData = await response.json();
  //     console.log(jsonData);

  //     return jsonData;
  //   }

  //   fetchData();
  // }, []);

  const returnedStatus = (nowStatus) => {
    console.log(nowStatus);
    switch (nowStatus) {
      case "loading":
        return <h1>loading!</h1>;
      case "failed":
        return <h1>Failed!</h1>;
      case "succeeded":
        return (
          <>
            {cartItems &&
              cartItems.map((e, key) => {
                return <MusicItem props={e} key={key} />;
              })}
          </>
        );
    }
  };

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

        <div className="items">{returnedStatus(status)}</div>

        <div className="footer">
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
  min-height: 100vh;

  min-width: 100vw;
  padding-top: 50px;
  box-sizing: border-box;
  .title {
    margin: 0 auto;
    width: 500px;
    padding: 30px;
    text-align: center;
  }

  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 800px;
  }

  .footer {
    display: flex;
    justify-content: space-evenly;
    /* flex-direction: column; */
    /* align-items: center; */

    span {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      border-color: #535bf2;
      margin-bottom: 30px;
    }
  }
`;

export default App;
