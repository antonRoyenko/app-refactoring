import styled from 'styled-components/macro';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;

  text-align: left;

  background-color: antiquewhite;
  border: 1px solid palegoldenrod;

  button {
    padding: 10px;

    color: black;
    font-size: 14px;

    background-color: lightpink;
    border: none;
    outline: none;
  }
`;
