import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "10px")};
`;

const Flex = ({ children, direction, gap }) => {
  return (
    <StyledFlex direction={direction} gap={gap}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
