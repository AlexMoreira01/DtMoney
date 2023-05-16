import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
  margin-bottom: 2px;

  .buttonActive {
    font-weight: bolder;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["green-500"]};

    &:hover {
      background-color: ${(props) => props.theme["green-700"]};
    }
  }
`;

export const ButtonPagination = styled.button`
  display: inline-flex;
  width: 40px;
  height: 40px;

  margin: 0px 5px;
  padding: 0px 6px;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;

  align-items: center;
  justify-content: center;
  text-align: center;

  color: ${(props) => props.theme["gray-400"]};
  background-color: ${(props) => props.theme["gray-600"]};

  font-weight: 400;
  font-size: 0.875rem;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
