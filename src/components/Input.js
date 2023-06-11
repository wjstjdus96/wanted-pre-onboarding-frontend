import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
  }
  input {
    max-width: 300px;
    padding: 12px;
    border-radius: 10px;
  }
`;

function Input({ label, testId, ...inputProps }) {
  return (
    <Wrapper>
      {label && <label>{label}</label>}
      <input data-testid={testId} {...inputProps} />
    </Wrapper>
  );
}

export default Input;
