import styled from 'styled-components/macro';

export const Guests = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

export const GuestItem = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  padding: 0 20px;
  text-align: left;
  border: 1px solid palevioletred;
  transition: background-color linear 150ms;

  &:hover {
    background-color: papayawhip;
    border-width: 2px;
  }

  ${({ isGoing }) =>
    isGoing &&
    `
    background-color: palegreen;
  `}
`;
