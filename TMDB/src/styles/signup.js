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
  }

  & .username-container,
  .email-container,
  .age-container,
  .pw-container,
  .pwcheck-container {
    display: flex;
    flex-direction: column;
    height: 60px;
    margin-bottom: 10px;
  }

  & input {
    width: 500px;
    height: 40px;
    padding-left: 15px;
    margin-bottom: 8px;
    border-radius: 20px;
  }

  & input::placeholder {
    font-size: 11px;
  }

  & .error-message {
    margin-left: 8px;
    font-size: 11px;
    color: #a12110;
  }

  & button {
    margin: 0 auto 40px auto;
    width: 450px;
    height: 40px;
    border-radius: 20px;
    font-weight: 600;
  }

  & .enabled {
    background-color: #e6b71e;
    color: black;
  }

  & .disabled {
    background-color: white;
    color: black;
  }

  & .login-redirect {
    display: flex;
    justify-content: space-around;
    width: 300px;

    & span,
    a {
      font-size: 11px;
      cursor: pointer;
    }
  }
`;

export default Container;
