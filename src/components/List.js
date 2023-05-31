// import { useState } from 'react';
import { useState } from "react";
import Modal from "./common/Modal";

const List = (props) => {
    const { list, content, selectIndex, deleteIndex } = props;
    const [visible, setVisible] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const onDelete = (index) => {
      deleteIndex(index);
    };
    const onCheck = (index) => {
      selectIndex(index);
    };

    const saveContent = () => {
      
    }

    const closeModal = (event) => {
      event.preventDefault()
      setVisible(false)
    }

    const showModal = (idx) => {
      setSelectedIndex(idx)
      setVisible(true)
    }

    console.log(list[selectedIndex])

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
              <div style={{ marginLeft: "3rem" }}>
                <input
                  id="DeleteItem"
                  type="button"
                  value="Edit"
                  onClick={() => showModal(index)}
                />
              </div>
            </div>
          </div>
        ))}
        <Modal visible={visible}>
          <div style={{background: 'white', padding: 20, minWidth: 600, color: 'black'}}>
            <h1 style={{color: 'black'}}>Change ToDo Content</h1>

            <form>
              <div>
                <p>Title</p>
                <input type="text" name="title" value={selectedIndex>-1?list[selectedIndex].title:""} />
              </div>
              <div>
                <p>Content</p>
                <input type="text" name="content" value="" />
              </div>

              <div style={{marginTop: 20}}>
                <button onClick={saveContent} style={{marginRight: 20}}>Save</button>
                <button onClick={closeModal}>Close</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  };
  
  export default List;
  