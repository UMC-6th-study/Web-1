import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DoneTitle = styled.strong`
  display: inline-block;
  margin-bottom: 30px;
  border-bottom: 2px solid #d7dcde;
`;

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Li = styled.li`
  position: relative;
  width: 250px;
  padding: 5px 0 10px 0;
  margin-bottom: 15px;
  border-bottom: 2px solid #d7dcde;
  font-size: 17px;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 4px;
  border: none;
  background-color: #d3dbed;
  font-weight: 500;
`;

function Done({ todos, onClick }) {
  const handleClick = (id) => onClick(id);
  return (
    <Container>
      <DoneTitle>해낸 일</DoneTitle>
      <Ul>
        {todos.map((todo, index) =>
          todo.isDone === true ? (
            <Li key={index}>
              {todo.content}{" "}
              <Button onClick={() => handleClick(todo.id)}>삭제</Button>
            </Li>
          ) : null
        )}
      </Ul>
    </Container>
  );
}

export default Done;
