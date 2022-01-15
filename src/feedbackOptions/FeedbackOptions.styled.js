import styled from '@emotion/styled';

export const ButtonsContainer = styled.div`
  margin-bottom: 25px;
`;
export const Button = styled.button`
  padding: 5px 15px;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  color: #3e4557;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :not(:last-child) {
    margin-right: 15px;
  }
  :hover,
  :focus-visible {
    background-color: #ecd6b7;
    color: #000;
  }
`;
