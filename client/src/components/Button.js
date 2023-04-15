import styled from "styled-components";

const Wrapper = styled.button`
  background-color: #0171e3;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
`;

function Button({ text, testId }) {
  return <Wrapper data-testid={testId}>{text}</Wrapper>;
}

export default Button;
