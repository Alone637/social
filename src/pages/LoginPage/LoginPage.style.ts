import styled from "styled-components";

export const StyledLoginPage = styled.div`
  box-shadow: 0 0 10px var(--light-gray);
  border-radius: 20px;
  background-color: var(--elems-bgc);
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid var(--disabled-bgc);
    background-color: transparent;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
      border-color: var(--prime-color);
    }
  }

  button {
    width: 100%;
    margin-bottom: 30px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: var(--gray);

    &:hover {
      text-decoration: underline;
    }
  }

@media (max-width: 530px) {
    width: 100%;
}
`