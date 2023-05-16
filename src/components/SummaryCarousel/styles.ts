import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  display: flex;
  justify-content: flex-start;

  margin: 0 auto;
  padding: 0 1.5rem;

  margin-top: -5rem;
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  /* width: 280px !important; */

  width: 100% !important;
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }

  span {
    font-size: 1rem;
    flex: none;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}
`;
