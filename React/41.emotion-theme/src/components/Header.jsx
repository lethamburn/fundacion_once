import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  gap: ${(props) => props.theme.spacing.gap};
  & ul {
    display: flex;
    gap: ${(props) => props.theme.spacing.gap};
  }
`;

const Header = () => {
  const theme = useTheme();

  return (
    <HeaderStyled theme={theme}>
      <h1>Styled Components & Emotion</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Learn</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
