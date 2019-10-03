import styled from 'styled-components/macro';

export const Status = styled.h3`
  height: 0;

  opacity: 0;

  transition: all ease 250ms;

  ${({ message }) =>
    message &&
    `
    height: 40px;

    opacity: 1;
  `}
`;
