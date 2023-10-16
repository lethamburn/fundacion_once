import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid black;
  border-radius: 10px;
  padding: ${(props) =>
    props.size === "large"
      ? "18px 24px"
      : props.size === "small"
      ? "4px 8px"
      : "8px 14px"};
  font-weight: 700;
  letter-spacing: 4px;
  background-color: ${(props) =>
    props.variant === "success"
      ? "lightgreen"
      : props.variant === "warning"
      ? "orange"
      : "transparent"};
  transition: 0.4s;
  &:hover {
    border: ${(props) =>
      props.variant === "success"
        ? "2px solid green"
        : props.variant === "warning"
        ? "2px solid crimson"
        : "2px solid black"};
  }
`;

const Button = ({ children, action, variant, size }) => {
  return (
    <StyledButton onClick={action} variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
