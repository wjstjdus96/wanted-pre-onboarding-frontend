import styled from "styled-components";

const Wrapper = styled.button`
  background-color: #0171e3;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    background-color: rgb(1, 113, 227, 0.5);
    cursor: default;
  }
`;

function Button({ text, testId, disabled }) {
  return (
    <Wrapper data-testid={testId ? testId : null} disabled={disabled}>
      {text}
    </Wrapper>
  );
}

export default Button;
