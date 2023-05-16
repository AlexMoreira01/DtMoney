import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    img {
      width: 117px;
      height: 32px;
    }
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;

  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};

  font-weight: bold;
  font-size: 0.875rem;
  padding: 0 1.25rem;

  border: 0;
  border-radius: 6px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 38px;
    padding: 8px 16px;
  }

  &:hover {
    background: ${(props) => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`;
