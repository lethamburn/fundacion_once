import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const TextStyled = styled.p`
  font-size: 18px;
  color: ${(props) =>
    props.variant === "info"
      ? props.theme.palette.info
      : props.variant === "danger"
      ? props.theme.palette.danger
      : props.variant === "warning"
      ? props.theme.palette.warning
      : props.theme.palette.white};
  animation: ${(props) => props.theme.animations.fadeIn};
`;

const Text = ({ children, variant }) => {
  const theme = useTheme();

  return (
    <TextStyled theme={theme} variant={variant}>
      {children}
    </TextStyled>
  );
};

export default Text;
