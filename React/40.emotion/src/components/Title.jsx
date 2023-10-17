import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const StyledTitle = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: ${props => props.theme.colors.primary};
  letter-spacing: 4px;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const Title = ({ children }) => {
  const theme = useTheme();

  return <StyledTitle theme={theme}>{children}</StyledTitle>;
};

export default Title;
