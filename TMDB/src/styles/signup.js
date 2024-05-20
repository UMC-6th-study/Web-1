import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  color: white;

  & h1 {
    font-size: 17px;
    margin-bottom: 40px;
  }

  & form {
    display: flex;
    flex-direction: column;

    & span {
      color: #a12110;
    }
  }

  & input {
    width: 500px;
    height: 40px;
    padding-left: 15px;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  & input::placeholder {
    font-size: 11px;
  }

  & button {
    margin: 0 auto 40px auto;
    width: 450px;
    height: 40px;
    background-color: white;
    border-radius: 20px;
    font-weight: 600;
  }

  & .login-redirect {
    display: flex;
    justify-content: space-around;
    width: 300px;

    & span {
      font-size: 11px;
    }
  }
`;

export default Container;
