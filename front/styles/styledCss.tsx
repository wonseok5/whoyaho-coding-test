import { css } from "styled-components";

export const DefaultButtonColor = css`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
