// import { useState } from 'react';

const List = (props) => {
    const { list } = props;
    const { content } = props;
    const { selectIndex } = props;
    const { deleteIndex } = props;
    const onDelete = (index) => {
      deleteIndex(index);
    };
    const onCheck = (index) => {
      selectIndex(index);
    };
    return (
      <div>
        {list.map((todo, index) => (
          <div
            style={{
              display: "flex",
              padding: "1rem",
              marginTop: "0.1rem",
              backgroundColor: "powderBlue"
            }}
            key={"todo-" + index}
          >
            <div>
              <span
                style={{
                  textDecorationLine: todo.done ? "line-Through" : "none"
                }}
              >
                Title : {todo.title}
              </span>
              {/* <b>{todo.done ? "Finished" : "Porgress"}</b>*/}
              <br />
              <span>Description : {content[index]}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDrection: "column",
                alignItems: "center"
              }}
            >
              <div style={{ marginLeft: "7rem" }}>
                <input
                  id="lineThrough"
                  type="button"
                  value="Check"
                  onClick={() => onCheck(index)}
                />
              </div>
              <div style={{ marginLeft: "3rem" }}>
                <input
                  id="DeleteItem"
                  type="button"
                  value="Delete"
                  onClick={() => onDelete(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default List;
  