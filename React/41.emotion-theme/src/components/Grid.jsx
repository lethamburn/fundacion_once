import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const GridStyled = styled.div`
  display: grid;
  padding: ${(props) => props.theme.spacing.padding};
  grid-template-columns: ${props => props.theme.grid.columns};
  grid-auto-rows: 300px;
  gap: ${(props) => props.theme.spacing.gap};
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Grid = ({ children }) => {
  const theme = useTheme();

  return <GridStyled theme={theme}>{children}</GridStyled>;
};

export default Grid;
