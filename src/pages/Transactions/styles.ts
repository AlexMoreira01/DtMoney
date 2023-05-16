import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;

  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 375px;

    margin: 2rem auto 0;
    padding: 0 1.5rem;
  }
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-900"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const TransactionsList = styled.div`
  margin-top: 12px;

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 25.6px;

    color: ${(props) => props.theme["gray-300"]};
  }

  li {
    list-style: none;

    width: 100%;
    height: 140px;
    margin-top: 10px;
    border-radius: 6px;
    padding: 20px;

    background-color: ${(props) => props.theme["gray-700"]};
  }

  /* > li {
  } */
`;

interface PriceHighLightProps {
  variant: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  @media screen and (max-width: 768px) {
    margin-top: 4px;

    font-size: 20px;
    font-family: 700;
    line-height: 32px;
  }

  /* display: block; */
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;

export const DivCategoryList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 12px;

  span {
    color: ${(props) => props.theme["gray-500"]};

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 4px;
  }
`;

export const DivInfosMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;

  p {
    font-size: 1.125rem;

    color: ${(props) => props.theme["gray-300"]};
  }

  span {
    font-size: 1rem;

    color: ${(props) => props.theme["gray-500"]};
  }
`;
