import styled from "styled-components";

const ItemWrapper = styled.div`
  padding: 10px 0px;
  li {
    list-style: none;
  }
`;

function TodoItem({ item }) {
  return (
    <ItemWrapper>
      <li>
        <label>
          <input type="checkbox" />
          <span>{item.todo}</span>
        </label>
      </li>
    </ItemWrapper>
  );
}

export default TodoItem;
